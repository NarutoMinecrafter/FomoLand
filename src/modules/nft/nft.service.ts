import { Injectable } from '@nestjs/common';
import Moralis from 'moralis';
import { GetNFTTransfersRequest } from '@moralisweb3/common-evm-utils';
import { AppConfig } from 'src/common/config';

Moralis.start({
  apiKey: AppConfig.moralisApiKey,
});

@Injectable()
export class NftService {
  async getNFTTransfers(request: GetNFTTransfersRequest) {
    const data = await Moralis.EvmApi.nft.getNFTTransfers(request);
    console.log(data);
    return data;
  }
}
