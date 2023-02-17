import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { EvmChainToHex, ToBolean, ToNumber } from 'src/common/utils';
import { EvmChainEnum, EvmChainHexEnum } from './enums';

export class NFTTransfersQueryDto {
  @ApiProperty({ example: '0xe3f92992bb4f0f0d173623a52b2922d65172601d' })
  @IsString()
  address: string;

  @ApiProperty({ example: '0x1', description: 'hex or decimal' })
  @IsString()
  tokenId: string;

  @ApiPropertyOptional({
    example: EvmChainEnum.EthereumMainnet,
    enum: Object.values(EvmChainEnum),
  })
  @IsOptional()
  @EvmChainToHex()
  @IsIn(Object.values(EvmChainHexEnum))
  chain?: EvmChainHexEnum;

  @ApiPropertyOptional({
    example: 'hex',
    enum: ['hex', 'decimal'],
  })
  @IsOptional()
  @IsIn(['hex', 'decimal'])
  format?: 'hex' | 'decimal';

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

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @ToBolean()
  @IsBoolean()
  disableTotal?: boolean;
}
