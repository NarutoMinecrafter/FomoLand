import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional } from 'class-validator';
import { ToNumber } from 'src/common/utils';

export class BasePaginationQueryDto {
  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @ToNumber()
  @IsInt()
  page?: number = 1;

  @ApiPropertyOptional({ example: 50 })
  @IsOptional()
  @ToNumber()
  @IsInt()
  limit?: number = 50;
}

export class BasePaginationDto {
  @ApiProperty({ type: Number })
  total_page: number;

  @ApiProperty({ type: Number })
  limit: number;

  @ApiProperty({ type: Number })
  page: number;
}
