import { Injectable } from '@nestjs/common';
import { AppConfig } from 'src/common/config';
import { FetchService, objectToQueryString } from 'src/common/utils';
import {
  CollectionsDataDto,
  CollectionDto,
  MetadataDto,
  CollectionsQueryDto,
  MetatataQueryDto,
  basePaginationQuery,
  DerivedDataDto,
} from './dto';

@Injectable()
export class CollectionsService {
  private fetchService: FetchService;

  constructor() {
    this.fetchService = new FetchService(AppConfig.traitsniperApiUrl, {
      'x-ts-api-key': AppConfig.traitsniperApiKey,
      accept: 'application/json',
    });
  }

  async getCollections(query: CollectionsQueryDto = basePaginationQuery) {
    const data: CollectionsDataDto = await this.fetchService.request(
      `collections?${objectToQueryString(query)}`,
    );
    console.log(data);
    return data;
  }

  async getCollection(contractAddress: string) {
    const data: CollectionDto = await this.fetchService.request(
      `collections/${contractAddress}`,
    );
    console.log(data);
    return data;
  }

  async getMetadata(
    contractAddress: string,
    query: MetatataQueryDto = basePaginationQuery,
  ) {
    const data: MetadataDto = await this.fetchService.request(
      `collections/${contractAddress}/nfts?${objectToQueryString(query)}`,
    );
    console.log(data);
    return data;
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
