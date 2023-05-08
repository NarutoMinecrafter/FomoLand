import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CollectionsModule } from './modules/collections/collections.module';
import { NftModule } from './modules/nft/nft.module';
import { CollectionEntity, NFTEntity } from './modules/collections/dto';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'FomoLand',
      entities: [CollectionEntity, NFTEntity],
      synchronize: true,
    }),
    ScheduleModule.forRoot(),
    CollectionsModule,
    NftModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
