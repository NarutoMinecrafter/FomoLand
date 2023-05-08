import { Controller, Get, Query } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { NftService } from './nft.service';
import { NFTTransfersQueryDto } from './dto/query';
import { NFTTsDataDto, NFTsQueryDto, TransfersDataDto } from './dto';
import { ErrorDto } from 'src/common/utils/dto';

@ApiTags('NFT')
@Controller('nft')
export class NftController {
  constructor(private readonly nftService: NftService) { }

  @ApiOperation({ summary: 'Get NFTs by token collection address' })
  @ApiOkResponse({
    type: NFTTsDataDto,
    description: 'Returns the nfts data.',
  })
  @ApiBadRequestResponse({ type: ErrorDto })
  @Get('nfts')
  async getNFTTs(@Query() query: NFTsQueryDto) {
    return this.nftService.getNFTTs(query);
  }

  @ApiOperation({ summary: 'Get NFT transfers by token id' })
  @ApiOkResponse({
    type: TransfersDataDto,
    description: 'Returns the transfers data.',
  })
  @ApiBadRequestResponse({ type: ErrorDto })
  @Get('nft-transfers')
  async getNFTTransfers(@Query() query: NFTTransfersQueryDto) {
    return this.nftService.getNFTTransfers(query);
  }
}
