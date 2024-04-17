import { Module } from '@nestjs/common';
import { CheerioService } from './cheerio.service';
import { CheerioController } from './cheerio.controller';

@Module({
  providers: [CheerioService],
  controllers: [CheerioController]
})
export class CheerioModule {}
