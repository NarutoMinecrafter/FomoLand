import { ApiProperty } from "@nestjs/swagger";
import { BasePaginationDto } from "./common";
import { NFTEntity } from "./nft.entity";

export class MetadataDto extends BasePaginationDto {
  @ApiProperty({ type: [NFTEntity] })
  nfts: NFTEntity[];
}
