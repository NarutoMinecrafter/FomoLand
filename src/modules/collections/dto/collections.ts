import { ApiProperty } from '@nestjs/swagger';
import { BasePaginationDto } from './common';
import { CollectionEntity } from './collections.entity';

export class CollectionsDataDto extends BasePaginationDto {
  @ApiProperty({ type: [CollectionEntity] })
  collections: CollectionEntity[];
}

export class DerivedDataDto {
  @ApiProperty({ type: Number })
  marketCap: number;

  @ApiProperty({ type: Number })
  volume24h: number;

  @ApiProperty({ type: Number })
  circulatingSupply: number;

  @ApiProperty({ type: Number })
  totalSupply: number;

  @ApiProperty({ type: Number })
  floor: number;
}
