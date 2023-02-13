import { Injectable } from '@nestjs/common';
import { FetchService } from '../../common/services/fetch.service';
import {
  CollectionsDataDto,
  CollectionDto,
  MetadataDto,
} from './collections.dto';

@Injectable()
export class CollectionsService {
  async getCollections(page = 1, limit = 10) {
    const data: CollectionsDataDto = await FetchService.request(
      `collections?page=${page}&limit=${limit}`,
    );

    console.log(data);

    return data;
  }

  async getCollection(contractAddress: string) {
    const data: CollectionDto = await FetchService.request(
      `collections/${contractAddress}`,
    );
    console.log(data);
    return data;
  }

  async getMetadata(contractAddress: string, page = 1, limit = 200) {
    const data: MetadataDto = await FetchService.request(
      `collections/${contractAddress}/nfts?page=${page}&limit=${limit}`,
    );
    console.log(data);
    return data;
  }
}
