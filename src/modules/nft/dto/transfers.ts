import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

class TransferDto {
  @ApiProperty()
  block_number: string;

  @ApiProperty()
  block_timestamp: string;

  @ApiProperty()
  block_hash: string;

  @ApiProperty()
  transaction_hash: string;

  @ApiProperty()
  transaction_index: number;

  @ApiProperty()
  log_index: number;

  @ApiProperty()
  value: string;

  @ApiProperty()
  contract_type: string;

  @ApiProperty()
  transaction_type: string;

  @ApiProperty()
  token_address: string;

  @ApiProperty()
  token_id: string;

  @ApiProperty()
  from_address: string;

  @ApiProperty()
  to_address: string;

  @ApiProperty()
  amount: string;

  @ApiProperty()
  verified: number;

  @ApiProperty()
  operator: string;
}

export class TransfersDataDto {
  @ApiProperty({ type: Number })
  total: number;

  @ApiProperty({ type: Number })
  page: number;

  @ApiProperty({ type: Number })
  page_size: number;

  @ApiPropertyOptional({ required: false })
  cursor: string;

  @ApiProperty({ type: [TransferDto] })
  result: TransferDto[];

  @ApiProperty()
  block_exists: boolean;
}
