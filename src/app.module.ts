import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CollectionsModule } from './modules/collections/collections.module';
import { NftModule } from './modules/nft/nft.module';

@Module({
  imports: [CollectionsModule, NftModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
