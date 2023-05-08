import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'collections' })
export class CollectionEntity {
  @ApiProperty({ type: Number })
  @Column('int')
  @PrimaryColumn()
  id: number;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  @Column('text', { nullable: true })
  nft_name?: string;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  @Column('text', { nullable: true })
  contract_address: string;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  @Column('text', { nullable: true })
  base_uri?: string;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  @Column('text', { nullable: true })
  mempool_base_uri?: string;

  @ApiPropertyOptional({ type: Number })
  @IsOptional()
  @Column('float', { nullable: true })
  supply?: number;

  @ApiPropertyOptional({ type: Number })
  @IsOptional()
  @Column('float', { nullable: true })
  total_revealed?: number;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  @Column('text', { nullable: true })
  status?: string;

  @ApiPropertyOptional({ type: Number })
  @IsOptional()
  @Column('float', { nullable: true })
  floor_price?: number;

  @ApiProperty({ type: Boolean })
  @IsOptional()
  @Column('bool', { nullable: true })
  highlight?: boolean;

  @ApiPropertyOptional({ type: Number })
  @IsOptional()
  @Column('float', { nullable: true })
  highest_offer_price?: number;

  @ApiProperty({ type: Boolean })
  @IsOptional()
  @Column('bool', { nullable: true })
  trending?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @Column('text', { nullable: true })
  image?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @Column('text', { nullable: true })
  opensea_slug?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @Column('text', { nullable: true })
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @Column('text', { nullable: true })
  twitter?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @Column('text', { nullable: true })
  website?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @Column('text', { nullable: true })
  discord?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @Column('text', { nullable: true })
  nft_name_slug?: string;

  @ApiPropertyOptional({ type: Number })
  @IsOptional()
  @Column('float', { nullable: true })
  one_day_volume?: number;

  @ApiPropertyOptional({ type: Number })
  @IsOptional()
  @Column('float', { nullable: true })
  seven_day_volume?: number;

  @ApiPropertyOptional({ type: Number })
  @IsOptional()
  @Column('float', { nullable: true })
  thirty_day_volume?: number;

  @ApiPropertyOptional({ type: Number })
  @IsOptional()
  @Column('float', { nullable: true })
  total_volume?: number;

  @ApiProperty({ type: Number })
  @IsOptional()
  @Column('int', { nullable: true })
  one_day_sales?: number;

  @ApiPropertyOptional({ type: Number })
  @IsOptional()
  @Column('float', { nullable: true })
  num_owners?: number;

  @ApiPropertyOptional({ type: Number })
  @IsOptional()
  @Column('float', { nullable: true })
  num_bluechip_owners?: number;

  @ApiPropertyOptional({ type: Number })
  @IsOptional()
  @Column('float', { nullable: true })
  royalty_fee: number;

  @ApiPropertyOptional({ type: Number })
  @IsOptional()
  @Column('float', { nullable: true })
  floor_price_one_day_change?: number;

  @ApiPropertyOptional({ type: Number })
  @IsOptional()
  @Column('float', { nullable: true })
  floor_price_seven_day_change?: number;

  @ApiPropertyOptional({ type: Number })
  @IsOptional()
  @Column('float', { nullable: true })
  vol_one_day_change?: number;

  @ApiPropertyOptional({ type: Number })
  @IsOptional()
  @Column('float', { nullable: true })
  vol_seven_day_change?: number;

  @ApiPropertyOptional({ type: Number })
  @IsOptional()
  @Column('float', { nullable: true })
  num_current_listed?: number;

  @ApiProperty({ type: Boolean })
  @IsOptional()
  @Column('bool', { nullable: true })
  verified?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @Column('timestamptz', { nullable: true })
  revealed_at?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @Column('timestamptz', { nullable: true })
  fully_revealed_at?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @Column('timestamptz', { nullable: true })
  created_at?: Date;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  @Column('text', { nullable: true })
  expecting_reveal_time?: string;

  @ApiPropertyOptional({ type: Number })
  @IsOptional()
  @Column('float', { nullable: true })
  peak_floor?: number;

  @ApiPropertyOptional({ type: [String] })
  @IsOptional()
  @Column('text', { array: true, nullable: true })
  tags?: string[];

  @ApiPropertyOptional({ type: Number })
  @IsOptional()
  @Column('float', { nullable: true })
  floor_gap?: number;

  @ApiPropertyOptional({ type: Number })
  @IsOptional()
  @Column('float', { nullable: true })
  num_last_sale_below_current_floor?: number;

  @ApiPropertyOptional({ type: Number })
  @IsOptional()
  @Column('float', { nullable: true })
  one_day_average_price?: number;
}
