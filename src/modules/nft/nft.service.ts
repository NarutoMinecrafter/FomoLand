import { Injectable } from '@nestjs/common';
import Moralis from 'moralis';
import { GetNFTTransfersRequest } from '@moralisweb3/common-evm-utils';
import { AppConfig } from 'src/common/config';
import { NFTTsDataDto, NFTsQueryDto } from './dto';

Moralis.start({
  apiKey: AppConfig.moralisApiKey,
});

@Injectable()
export class NftService {
  async getNFTTransfers(request: GetNFTTransfersRequest) {
    return Moralis.EvmApi.nft.getNFTContractTransfers(request);
  }

  async getNFTTs(request: NFTsQueryDto): Promise<NFTTsDataDto> {
    const data = await Moralis.EvmApi.nft.getContractNFTs(request) as unknown as NFTTsDataDto;
    console.log(data.result[0])
    return data
  }
}
