import { Module } from '@nestjs/common';
import { CheerioModule } from './cheerio/cheerio.module';

@Module({
  imports: [CheerioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
