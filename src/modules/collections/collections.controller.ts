import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiOkResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { CollectionsService } from './collections.service';
import {
  CollectionEntity,
  CollectionsDataDto,
  DerivedDataDto,
  MetadataDto,
  MetatataQueryDto,
  TopCollectionsQueryDto,
  basePaginationQuery,
} from './dto';
import { ErrorDto } from 'src/common/utils/dto';

@ApiTags('Collections')
@Controller('collections')
export class CollectionsController {
  constructor(private readonly collectionsService: CollectionsService) { }

  @ApiOperation({ summary: 'Get top collections' })
  @ApiOkResponse({
    type: CollectionsDataDto,
    description: 'Returns the collections data.',
  })
  @ApiBadRequestResponse({ type: ErrorDto })
  @Get('top')
  getTopCollectionsData(@Query() query: TopCollectionsQueryDto) {
    return this.collectionsService.getTopCollections({ ...basePaginationQuery, ...query });
  }

  @ApiOperation({ summary: 'Get collection data' })
  @ApiParam({
    name: 'contractAddress',
    type: String,
    example: '0xe3f92992bb4f0f0d173623a52b2922d65172601d',
  })
  @ApiOkResponse({
    type: CollectionEntity,
    description: 'Returns the collection data.',
  })
  @ApiBadRequestResponse({ type: ErrorDto })
  @Get(':contractAddress')
  async getCollectionData(@Param('contractAddress') contractAddress: string) {
    const data = await this.collectionsService.getCollection(contractAddress);
    return data;
  }

  @ApiOperation({ summary: 'Get metadata data' })
  @ApiParam({
    name: 'contractAddress',
    type: String,
    example: '0xe3f92992bb4f0f0d173623a52b2922d65172601d',
  })
  @ApiOkResponse({
    type: MetadataDto,
    description: 'Returns the metadata data.',
  })
  @ApiBadRequestResponse({ type: ErrorDto })
  @Get(':contractAddress/metadata')
  async getMetadataData(
    @Param('contractAddress') contractAddress: string,
    @Query() query: MetatataQueryDto,
  ) {
    const data = await this.collectionsService.fetchMetadata(
      contractAddress,
      query,
    );
    return data;
  }

  @ApiOperation({ summary: 'Get market price' })
  @ApiParam({
    name: 'contractAddress',
    type: String,
    example: '0xe3f92992bb4f0f0d173623a52b2922d65172601d',
  })
  @ApiOkResponse({
    type: Number,
    description: 'Returns the metadata data.',
  })
  @ApiBadRequestResponse({ type: ErrorDto })
  @Get(':contractAddress/market-price')
  async getMarketPrice(@Param('contractAddress') contractAddress: string) {
    const data = await this.collectionsService.getMarketPrice(contractAddress);
    return data;
  }

  @ApiOperation({ summary: 'Get market price' })
  @ApiParam({
    name: 'contractAddress',
    type: String,
    example: '0xe3f92992bb4f0f0d173623a52b2922d65172601d',
  })
  @ApiOkResponse({
    type: DerivedDataDto,
    description: 'Returns the metadata data.',
  })
  @ApiBadRequestResponse({ type: ErrorDto })
  @Get(':contractAddress/derived-data')
  async getDerivedData(@Param('contractAddress') contractAddress: string) {
    const data = await this.collectionsService.getDerivedData(contractAddress);
    return data;
  }
}
