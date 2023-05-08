import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Column, Entity, PrimaryColumn } from 'typeorm';

class TraitDto {
  @ApiProperty({ type: Number })
  @IsInt()
  trait_id: number;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  value: string;

  @ApiProperty({ type: Number })
  @IsNumber()
  pool: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  score: number;
}

@Entity({ name: 'nfts' })
export class NFTEntity {
  @ApiProperty({ type: Number })
  @Column('int')
  @PrimaryColumn()
  @IsInt()
  id: number;

  @ApiPropertyOptional({ type: String })
  @Column({ nullable: true })
  @IsString()
  token_id?: string;

  @ApiPropertyOptional({ type: String })
  @Column({ nullable: true })
  @IsString()
  image?: string;

  @ApiPropertyOptional({ type: String })
  @Column({ nullable: true })
  @IsString()
  name?: string;

  @ApiPropertyOptional({ type: String })
  @Column({ nullable: true })
  @IsString()
  owner?: string;

  @ApiPropertyOptional({ type: String })
  @Column({ nullable: true })
  @IsString()
  contract_address?: string;

  @ApiPropertyOptional({ type: [TraitDto] })
  @ValidateNested({ each: true })
  @Column('json', { nullable: true })
  @Type(() => TraitDto)
  traits?: object;

  @ApiPropertyOptional({ type: Number })
  @Column('float', { nullable: true })
  @IsString()
  rarity_score?: number;

  @ApiPropertyOptional({ type: Number })
  @Column('int', { nullable: true })
  @IsString()
  rarity_rank?: number;

  @ApiPropertyOptional({ type: String })
  @Column({ nullable: true })
  @IsString()
  opensea_url?: string;
}
