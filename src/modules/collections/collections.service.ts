import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppConfig } from 'src/common/config';
import { FetchService, chunkArray, objectToQueryString, sleep } from 'src/common/utils';
import {
  CollectionsDataDto,
  MetadataDto,
  CollectionsQueryDto,
  MetatataQueryDto,
  basePaginationQuery,
  DerivedDataDto,
  CollectionEntity,
  TopCollectionsQueryDto,
  TopByEnum,
  NFTEntity,
} from './dto';
import { Cron, CronExpression } from '@nestjs/schedule';
import { CollectionsRepository } from './collections.repository';
import { NftsRepository } from './nft.repository';

@Injectable()
export class CollectionsService {
  private readonly logger = new Logger(CollectionsService.name);

  private fetchService: FetchService;

  constructor(
    @InjectRepository(CollectionsRepository) private readonly collectionsRepository: CollectionsRepository,
    @InjectRepository(NftsRepository) private readonly nftsRepository: NftsRepository
  ) {
    this.fetchService = new FetchService(AppConfig.traitsniperApiUrl, {
      'x-ts-api-key': AppConfig.traitsniperApiKey,
      accept: 'application/json',
    });
  }

  private fetchCollections(query: CollectionsQueryDto = basePaginationQuery): Promise<CollectionsDataDto> {
    return this.fetchService.request(
      `collections?${objectToQueryString(query)}`,
    );

  }

  async fetchMetadata(
    contractAddress: string,
    query: MetatataQueryDto = basePaginationQuery,
  ): Promise<MetadataDto> {
    return this.fetchService.request(
      `collections/${contractAddress}/nfts?${objectToQueryString(query)}`,
    );
  }

  getTopCollections({ top_by, ...query }: TopCollectionsQueryDto = basePaginationQuery) {
    switch (top_by) {
      case TopByEnum.PriceIncr:
        return this.collectionsRepository.getTopPriceIncrease(query);

      case TopByEnum.PriceDesc:
        return this.collectionsRepository.getTopPriceDecrease(query);

      case TopByEnum.Sales:
        return this.collectionsRepository.getTopSales(query);

      case TopByEnum.Subscribers:
        return this.collectionsRepository.getTopSubscribers(query);

      default:
        return this.collectionsRepository.findAllPaginated(query);
    }
  }


  async getCollection(contract_address: string) {
    return this.collectionsRepository.findOneBy({ contract_address })
  }

  @Cron(CronExpression.EVERY_6_HOURS)
  async rewriteCollections() {
    this.logger.debug('Refill collections has been started...');

    try {
      let page = 1
      let collections: CollectionEntity[] = []
      let currentCollections: CollectionEntity[] = []

      do {
        currentCollections = []
        const collectionsData = await this.fetchCollections({ page, limit: 100 })
        currentCollections = collectionsData.collections || []
        collections = collections.concat(currentCollections.map(collection => this.collectionsRepository.create(collection)))
        console.log({ page: page, total_page: collectionsData.total_page, currentCollections: currentCollections.length, collections: collections.length })
        await sleep(12000)
        page++
      } while (currentCollections.length);
      if (collections.length) {
        const chynkCollections = chunkArray(collections, 1000)
        await this.collectionsRepository.delete({})
        await Promise.all(chynkCollections.map(async chynk => await this.collectionsRepository.save(chynk)))
        this.logger.debug(`Refill collections has been succesfully finished. Collections count is: ${collections.length}`);
      }
    } catch (error) {
      this.logger.error('Refill collections error: ', error)
    }
  }

  async rewriteNFTS(collections: CollectionEntity[]) {
    this.logger.debug('Refill nfts has been started...');

    try {
      let i = 0
      let nfts: NFTEntity[] = []

      while (i < collections.length) {
        const collection = collections[i]
        let page = 1
        let currentNfts: NFTEntity[] = []

        do {
          currentNfts = []
          const metadata = await this.fetchMetadata(collection.contract_address, { page, limit: 200 })
          currentNfts = metadata.nfts || []
          nfts = nfts.concat(currentNfts.map(nft => this.nftsRepository.create(nft)))
          await sleep(12000)
          page++
        } while (currentNfts.length)

        i++
      }

      if (nfts.length) {
        const chynkNfts = chunkArray(nfts, 1000)
        await this.nftsRepository.delete({})
        await Promise.all(chynkNfts.map(async chynk => await this.nftsRepository.save(chynk)))
        this.logger.debug(`Refill nfts has been succesfully finished. Collections count is: ${nfts.length}`);
      }
    } catch (error) {
      this.logger.error('Refill nfts error: ', error)
    }
  }

  async getMarketPrice(contractAddress: string) {
    const data = await this.getCollection(contractAddress);
    const { supply, num_current_listed, peak_floor } = data;

    const circulation = num_current_listed * peak_floor;
    const marketCap = circulation * peak_floor;
    const marketPrice = marketCap / supply;

    return marketPrice;
  }

  async getDerivedData(contractAddress: string): Promise<DerivedDataDto> {
    const data = await this.getCollection(contractAddress);
    const marketCap = data.supply * data.floor_price;
    const volume24h = data.one_day_volume;
    const circulatingSupply = data.total_revealed;
    const totalSupply = data.supply;
    const floor = data.floor_price;

    return { marketCap, volume24h, circulatingSupply, totalSupply, floor };
  }
}
