import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { NFTEntity, MetadataDto, basePaginationQuery } from "./dto";

@Injectable()
export class NftsRepository extends Repository<NFTEntity> {
  constructor(dataSource: DataSource) {
    super(NFTEntity, dataSource.createEntityManager());
  }

  async findAllPaginated({ page, limit } = basePaginationQuery): Promise<MetadataDto> {
    const [nfts, total] = await this.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    return { page: Number(page), total_page: Math.ceil(total / limit), limit: Number(limit), nfts };
  }

  async getTopPriceIncrease({ page, limit } = basePaginationQuery): Promise<MetadataDto> {
    const [nfts, total] = await this.createQueryBuilder('nfts')
      .orderBy('nfts.floor_price_one_day_change', 'ASC')
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    return { page: Number(page), total_page: Math.ceil(total / limit), limit: Number(limit), nfts };
  }

  async getTopPriceDecrease({ page, limit } = basePaginationQuery): Promise<MetadataDto> {
    const [nfts, total] = await this.createQueryBuilder('nfts')
      .orderBy('CASE WHEN nfts.floor_price_one_day_change IS NULL THEN 1 ELSE 0 END', 'ASC')
      .addOrderBy('nfts.floor_price_one_day_change', 'DESC')
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    return { page: Number(page), total_page: Math.ceil(total / limit), limit: Number(limit), nfts };
  }

  async getTopSales({ page, limit } = basePaginationQuery): Promise<MetadataDto> {
    const [nfts, total] = await this.createQueryBuilder('nfts')
      .orderBy('CASE WHEN nfts.highest_offer_price IS NULL THEN 1 ELSE 0 END', 'ASC')
      .addOrderBy('nfts.highest_offer_price', 'DESC')
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    return { page: Number(page), total_page: Math.ceil(total / limit), limit: Number(limit), nfts };
  }

  async getTopSubscribers({ page, limit } = basePaginationQuery): Promise<MetadataDto> {
    const [nfts, total] = await this.createQueryBuilder('nfts')
      .orderBy('CASE WHEN nfts.num_owners IS NULL THEN 1 ELSE 0 END', 'ASC')
      .addOrderBy('nfts.num_owners', 'DESC')
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    return { page: Number(page), total_page: Math.ceil(total / limit), limit: Number(limit), nfts };
  }
}