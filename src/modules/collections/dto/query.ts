import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsIn, IsOptional, IsString } from 'class-validator';
import { ToBolean } from 'src/common/utils';
import { BasePaginationQueryDto } from './common';
import { TopByEnum } from './enums';

export class TopCollectionsQueryDto extends BasePaginationQueryDto {
  @ApiPropertyOptional({
    example: TopByEnum.PriceIncr,
    enum: Object.values(TopByEnum),
  })
  @IsOptional()
  @IsIn(Object.values(TopByEnum))
  top_by?: TopByEnum
}

export class CollectionsQueryDto extends BasePaginationQueryDto {
  @ApiPropertyOptional({ example: 'asc' })
  @IsOptional()
  sort_1d_volume?: 'asc' | 'desc';

  @ApiPropertyOptional({ example: 'asc' })
  @IsOptional()
  sort_7d_volume?: 'asc' | 'desc';

  @ApiPropertyOptional({ example: 'asc' })
  @IsOptional()
  sort_30d_volume?: 'asc' | 'desc';

  @ApiPropertyOptional({ example: 'asc' })
  @IsOptional()
  sort_total_volume?: 'asc' | 'desc';

  @ApiPropertyOptional({ example: 'example_collection' })
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({ example: 'example-slug' })
  @IsOptional()
  slug?: string;
}

export class MetatataQueryDto extends BasePaginationQueryDto {
  @ApiPropertyOptional({ example: '1,2,3' })
  @IsOptional()
  token_ids?: string;

  @ApiPropertyOptional({ example: 'Background-Purple,Head-Spikes Multicolor' })
  @IsOptional()
  @IsString()
  traits?: string;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @ToBolean()
  @IsBoolean()
  match_any_of_traits?: boolean;

  @ApiPropertyOptional({ example: 'asc' })
  @IsOptional()
  sort_token?: 'asc' | 'desc';

  @ApiPropertyOptional({ example: 'asc' })
  @IsOptional()
  sort_rank?: 'asc' | 'desc';

  @ApiPropertyOptional({ example: 'asc' })
  @IsOptional()
  sort_score?: 'asc' | 'desc';
}
