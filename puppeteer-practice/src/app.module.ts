import { Module } from '@nestjs/common';
import { PuppeteerModule } from './puppeteer/puppeteer.module';
import { GogoanimeModule } from './gogoanime/gogoanime.module';

@Module({
  imports: [PuppeteerModule, GogoanimeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
