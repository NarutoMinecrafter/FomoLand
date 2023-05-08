import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { CollectionEntity, CollectionsDataDto, basePaginationQuery } from "./dto";

@Injectable()
export class CollectionsRepository extends Repository<CollectionEntity> {
  constructor(dataSource: DataSource) {
    super(CollectionEntity, dataSource.createEntityManager());
  }

  async findAllPaginated({ page, limit } = basePaginationQuery): Promise<CollectionsDataDto> {
    const [collections, total] = await this.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    return { page: Number(page), total_page: Math.ceil(total / limit), limit: Number(limit), collections };
  }

  async getTopPriceIncrease({ page, limit } = basePaginationQuery): Promise<CollectionsDataDto> {
    const [collections, total] = await this.createQueryBuilder('collections')
      .orderBy('collections.floor_price_one_day_change', 'ASC')
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    return { page: Number(page), total_page: Math.ceil(total / limit), limit: Number(limit), collections };
  }

  async getTopPriceDecrease({ page, limit } = basePaginationQuery): Promise<CollectionsDataDto> {
    const [collections, total] = await this.createQueryBuilder('collections')
      .orderBy('CASE WHEN collections.floor_price_one_day_change IS NULL THEN 1 ELSE 0 END', 'ASC')
      .addOrderBy('collections.floor_price_one_day_change', 'DESC')
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    return { page: Number(page), total_page: Math.ceil(total / limit), limit: Number(limit), collections };
  }

  async getTopSales({ page, limit } = basePaginationQuery): Promise<CollectionsDataDto> {
    const [collections, total] = await this.createQueryBuilder('collections')
      .orderBy('CASE WHEN collections.highest_offer_price IS NULL THEN 1 ELSE 0 END', 'ASC')
      .addOrderBy('collections.highest_offer_price', 'DESC')
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    return { page: Number(page), total_page: Math.ceil(total / limit), limit: Number(limit), collections };
  }

  async getTopSubscribers({ page, limit } = basePaginationQuery): Promise<CollectionsDataDto> {
    const [collections, total] = await this.createQueryBuilder('collections')
      .orderBy('CASE WHEN collections.num_owners IS NULL THEN 1 ELSE 0 END', 'ASC')
      .addOrderBy('collections.num_owners', 'DESC')
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    return { page: Number(page), total_page: Math.ceil(total / limit), limit: Number(limit), collections };
  }
}