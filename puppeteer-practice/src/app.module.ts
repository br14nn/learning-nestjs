import { Module } from '@nestjs/common';
import { PuppeteerModule } from './puppeteer/puppeteer.module';

@Module({
  imports: [PuppeteerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
