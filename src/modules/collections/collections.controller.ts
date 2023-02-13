import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiOkResponse,
  ApiResponse,
} from '@nestjs/swagger';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { CollectionsService } from './collections.service';
import {
  CollectionDto,
  CollectionsDataDto,
  ErrorDto,
  MetadataDto,
} from './collections.dto';

@ApiTags('nft')
@Controller('nft')
export class CollectionsController {
  constructor(private readonly nftService: CollectionsService) {}

  @ApiOperation({ summary: 'Get collections data' })
  @ApiQuery({ name: 'page', type: Number, required: false })
  @ApiQuery({ name: 'limit', type: Number, required: false })
  @ApiOkResponse({
    type: CollectionsDataDto,
    description: 'Returns the collections data.',
  })
  @ApiResponse({ status: 400, type: ErrorDto })
  @Get()
  async getCollectionsData(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    const data = await this.nftService.getCollections(page, limit);
    return data;
  }

  @ApiOperation({ summary: 'Get collection data' })
  @ApiParam({ name: 'contractAddress', type: String })
  @ApiOkResponse({
    type: CollectionDto,
    description: 'Returns the collection data.',
  })
  @ApiResponse({ status: 400, type: ErrorDto })
  @Get(':contractAddress')
  async getCollectionData(@Param('contractAddress') contractAddress: string) {
    const data = await this.nftService.getCollection(contractAddress);
    return data;
  }

  @ApiOperation({ summary: 'Get metadata data' })
  @ApiParam({ name: 'contractAddress', type: String })
  @ApiQuery({ name: 'page', type: Number, required: false })
  @ApiQuery({ name: 'limit', type: Number, required: false })
  @ApiOkResponse({
    type: MetadataDto,
    description: 'Returns the metadata data.',
  })
  @ApiResponse({ status: 400, type: ErrorDto })
  @Get(':contractAddress/metadata')
  async getMetadataData(
    @Param('contractAddress') contractAddress: string,
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    const data = await this.nftService.getMetadata(
      contractAddress,
      page,
      limit,
    );
    return data;
  }
}
