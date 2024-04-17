import { Controller, Get } from '@nestjs/common';
import { CheerioService } from './cheerio.service';

@Controller('cheerio')
export class CheerioController {
  constructor(private cheerioService: CheerioService) {}

  @Get('test')
  async test() {
    return this.cheerioService.test();
  }

  @Get('anime')
  async anime() {
    return this.cheerioService.anime();
  }
}
