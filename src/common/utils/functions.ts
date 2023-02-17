import { EvmChainEnum, EvmChainHexEnum } from 'src/modules/nft/dto/enums';

export function objectToQueryString(obj: any): string {
  const keyValuePairs = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      keyValuePairs.push(
        encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]),
      );
    }
  }

  return keyValuePairs.join('&');
}

export function getChainHex(chain: EvmChainEnum): EvmChainHexEnum {
  switch (chain) {
    case EvmChainEnum.EthereumMainnet:
      return EvmChainHexEnum.EthereumMainnet;
    case EvmChainEnum.GoerliTestnet:
      return EvmChainHexEnum.GoerliTestnet;
    case EvmChainEnum.BinanceSmartChainMainnet:
      return EvmChainHexEnum.BinanceSmartChainMainnet;
    case EvmChainEnum.PolygonMainnet:
      return EvmChainHexEnum.PolygonMainnet;
    case EvmChainEnum.FantomOperaMainnet:
      return EvmChainHexEnum.FantomOperaMainnet;
    case EvmChainEnum.BinanceSmartChainTestnet:
      return EvmChainHexEnum.BinanceSmartChainTestnet;
    case EvmChainEnum.EthereumClassicMainnet:
      return EvmChainHexEnum.EthereumClassicMainnet;
    case EvmChainEnum.AvalancheMainnet:
      return EvmChainHexEnum.AvalancheMainnet;
    case EvmChainEnum.AvalancheTestnetFuji:
      return EvmChainHexEnum.AvalancheTestnetFuji;
    case EvmChainEnum.EIP155Testnet:
      return EvmChainHexEnum.EIP155Testnet;
    case EvmChainEnum.EIP155Mainnet:
      return EvmChainHexEnum.EIP155Mainnet;
    case EvmChainEnum.OptimismMainnet:
      return EvmChainHexEnum.OptimismMainnet;
    case EvmChainEnum.ArbitrumMainnet:
      return EvmChainHexEnum.ArbitrumMainnet;
    case EvmChainEnum.AvalancheTestnetCChain:
      return EvmChainHexEnum.AvalancheTestnetCChain;
    default:
      return chain;
  }
}

export function numberToHex(num: number): number {
  return Number(num.toString(16));
}
