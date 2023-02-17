import { ApiProperty } from '@nestjs/swagger';

export class ErrorDto {
  @ApiProperty()
  code: number;

  @ApiProperty()
  message: string;
}
