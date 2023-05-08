import { NftsRepository } from './nft.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollectionsService } from './collections.service';
import { CollectionsController } from './collections.controller';
import { CollectionsRepository } from './collections.repository';
import { CollectionEntity, NFTEntity } from './dto';

@Module({
  imports: [TypeOrmModule.forFeature([CollectionEntity, NFTEntity])],
  providers: [CollectionsService, CollectionsRepository, NftsRepository],
  controllers: [CollectionsController],
})
export class CollectionsModule { }
