import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsDateString, IsIn, IsNumber, IsOptional, IsString, IsUrl } from "class-validator";
// import { EvmChainEnum, EvmChainHexEnum } from "./enums";
import { ToBolean, ToNumber } from "src/common/utils";

export class NFTsQueryDto {
  @ApiProperty({ example: '0xe3f92992bb4f0f0d173623a52b2922d65172601d' })
  @IsString()
  address: string;

  @ApiPropertyOptional({ example: 10 })
  @IsOptional()
  @ToNumber()
  @IsNumber()
  limit?: number;

  @ApiPropertyOptional({
    example: 'eyJzdGFydCI6ICJ0ZXN0IiwgImN1cnNvciI6ICJ0ZXN0In0=',
  })
  @IsOptional()
  @IsString()
  cursor?: string;

  // @ApiPropertyOptional({
  //   example: EvmChainEnum.EthereumMainnet,
  //   enum: Object.values(EvmChainEnum),
  // })
  // @IsOptional()
  // @EvmChainToHex()
  // @IsIn(Object.values(EvmChainHexEnum))
  // chain?: EvmChainHexEnum;

  // @ApiPropertyOptional({
  //   example: 'hex',
  //   enum: ['hex', 'decimal'],
  // })
  // @IsOptional()
  // @IsIn(['hex', 'decimal'])
  // format?: 'hex' | 'decimal';

  @ApiPropertyOptional({ example: 10 })
  @IsOptional()
  @ToNumber()
  @IsNumber()
  totalRanges?: number;

  @ApiPropertyOptional({ example: 10 })
  @IsOptional()
  @ToNumber()
  @IsNumber()
  range?: number;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @ToBolean()
  @IsBoolean()
  normalizeMetadata?: boolean;
}

export class NFTDto {
  @ApiProperty({ example: '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb' })
  @IsString()
  token_address: string;

  @ApiProperty({ example: '47', description: 'hex or decimal' })
  @IsString()
  token_id: string;

  @ApiProperty({ example: '1', description: 'amount of NFTs transferred' })
  @IsString()
  owner_of?: string;

  @ApiProperty({ example: '1', description: 'amount of NFTs transferred' })
  @IsString()
  amount: string;

  @ApiPropertyOptional({ example: 'fff3657368693f145d0ad29453f6cd4d' })
  @IsOptional()
  @IsString()
  token_hash?: string;

  @ApiPropertyOptional({
    example: '3918216',
    description: 'block number when the NFT was minted',
  })
  @IsOptional()
  @IsString()
  block_number_minted?: string;

  @ApiPropertyOptional({
    example: null,
    description: 'type of NFT contract (e.g. ERC721)',
  })
  @IsOptional()
  @IsString()
  contract_type?: string;

  @ApiPropertyOptional({ example: 'CRYPTOPUNKS' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 'Ͼ' })
  @IsOptional()
  @IsString()
  symbol?: string;

  @ApiPropertyOptional({
    example: 'https://www.larvalabs.com/cryptopunks/details/47',
  })
  @IsOptional()
  @IsUrl()
  token_uri?: string;

  @ApiPropertyOptional({
    example:
      '{"image":"https://www.larvalabs.com/cryptopunks/cryptopunk047.webp","name":"CryptoPunk 047","attributes":["Knitted Cap"],"description":"Male"}',
    description: 'JSON string of the NFT metadata',
  })
  @IsOptional()
  @IsString()
  metadata?: string;

  @ApiPropertyOptional({
    example: null,
    description: 'timestamp when the token uri was last synchronized',
  })
  @IsOptional()
  @IsDateString()
  last_token_uri_sync?: string;

  @ApiPropertyOptional({
    example: '2022-07-24T12:12:11.930Z',
    description: 'timestamp when the metadata was last synchronized',
  })
  @IsOptional()
  @IsDateString()
  last_metadata_sync?: string;

  @ApiPropertyOptional({
    example: '0xc352b534e8b987e036a93539fd6897f53488e56a',
    description: 'address of the account that minted the NFT',
  })
  @IsOptional()
  @IsString()
  minter_address?: string;

  @ApiPropertyOptional({ type: Boolean, example: true })
  @IsOptional()
  @IsBoolean()
  possible_spam?: boolean;

  @ApiPropertyOptional()
  normalized_metadata?: any;

  @ApiPropertyOptional()
  media?: any
}

export class NFTTsDataDto {
  @ApiProperty({ example: 9991, description: 'Общее количество токенов, переданных в результате запроса.' })
  total: number;

  @ApiProperty({ example: 0, description: 'Номер запрошенной страницы.' })
  page: number;

  @ApiProperty({ example: 100, description: 'Максимальное количество токенов, возвращаемых на одной странице.' })
  page_size: number;

  @ApiProperty({
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHhiNDdlM2NkODM3ZGRmOGU0YzU3ZjA1ZDcwYWI4NjVkZTZlMTkzYmJiIn0sInRva2VuX2FkZHJlc3MiOiIweGI0N2UzY2Q4MzdkZGY4ZTRjNTdmMDVkNzBhYjg2NWRlNmUxOTNiYmIiLCJsaW1pdCI6MTAwLCJvZmZzZXQiOjAsIm9yZGVyIjpbXSwicGFnZSI6MSwia2V5IjoiZmQ5MmE0ODg3MmE4NjIwZTFlNmU0NTk3ODZkMTExYWYiLCJ0b3RhbCI6OTk5MSwiaWF0IjoxNjY3ODA4NzcxfQ.9qXwHyyUKJkzrub-ze-q2gm8dC0dy-jvgF0CJrm5piY',
    description: 'Курсор для получения следующей страницы результатов запроса.'
  })
  cursor: string;

  @ApiProperty({ type: [NFTDto] })
  result: NFTDto[];

  @ApiProperty({ example: 'SYNCED', description: 'Статус.' })
  status: string;
}
