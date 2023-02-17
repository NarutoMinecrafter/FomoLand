import { ApiProperty } from '@nestjs/swagger';
import { BasePaginationDto } from './common';

export class TraitDto {
  @ApiProperty({ type: Number })
  trait_id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  value: string;

  @ApiProperty({ type: Number })
  pool: number;

  @ApiProperty({ type: Number })
  score: number;
}

export class NftDto {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty()
  token_id: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  owner: string;

  @ApiProperty()
  contract_address: string;

  @ApiProperty({ type: [TraitDto] })
  traits: TraitDto[];

  @ApiProperty({ type: Number })
  rarity_score: number;

  @ApiProperty({ type: Number })
  rarity_rank: number;

  @ApiProperty()
  opensea_url: string;
}

export class MetadataDto extends BasePaginationDto {
  @ApiProperty({ type: [NftDto] })
  nfts: NftDto[];
}
