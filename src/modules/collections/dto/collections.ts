import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { BasePaginationDto } from './common';

export class CollectionDto {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty()
  nft_name: string;

  @ApiProperty()
  contract_address: string;

  @ApiProperty()
  base_uri: string;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  mempool_base_uri?: string;

  @ApiProperty({ type: Number })
  supply: number;

  @ApiProperty({ type: Number })
  total_revealed: number;

  @ApiProperty()
  status: string;

  @ApiProperty({ type: Number })
  floor_price: number;

  @ApiProperty({ type: Boolean })
  highlight: boolean;

  @ApiProperty({ type: Number })
  highest_offer_price: number;

  @ApiProperty({ type: Boolean })
  trending: boolean;

  @ApiProperty()
  image: string;

  @ApiProperty()
  opensea_slug: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  twitter: string;

  @ApiProperty()
  website: string;

  @ApiProperty()
  discord: string;

  @ApiProperty()
  nft_name_slug: string;

  @ApiProperty({ type: Number })
  one_day_volume: number;

  @ApiProperty({ type: Number })
  seven_day_volume: number;

  @ApiProperty({ type: Number })
  thirty_day_volume: number;

  @ApiProperty({ type: Number })
  total_volume: number;

  @ApiProperty({ type: Number })
  one_day_sales: number;

  @ApiProperty({ type: Number })
  num_owners: number;

  @ApiProperty({ type: Number })
  num_bluechip_owners: number;

  @ApiProperty({ type: Number })
  royalty_fee: number;

  @ApiProperty({ type: Number })
  floor_price_one_day_change: number;

  @ApiProperty({ type: Number })
  floor_price_seven_day_change: number;

  @ApiProperty({ type: Number })
  vol_one_day_change: number;

  @ApiProperty({ type: Number })
  vol_seven_day_change: number;

  @ApiProperty({ type: Number })
  num_current_listed: number;

  @ApiProperty({ type: Boolean })
  verified: boolean;

  @ApiProperty()
  revealed_at: string;

  @ApiProperty()
  fully_revealed_at: string;

  @ApiProperty()
  created_at: string;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  expecting_reveal_time?: string;

  @ApiProperty({ type: Number })
  peak_floor: number;

  @ApiProperty({ type: [String] })
  tags: string[];

  @ApiProperty({ type: Number })
  floor_gap: number;

  @ApiProperty({ type: Number })
  num_last_sale_below_current_floor: number;

  @ApiProperty({ type: Number })
  one_day_average_price: number;
}

export class CollectionsDataDto extends BasePaginationDto {
  @ApiProperty({ type: [CollectionDto] })
  collections: CollectionDto[];
}
