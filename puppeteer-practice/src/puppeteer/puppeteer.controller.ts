import { Controller, Get } from '@nestjs/common';
import { PuppeteerService } from './puppeteer.service';

@Controller('puppeteer')
export class PuppeteerController {
  constructor(private puppeteer: PuppeteerService) {}

  @Get('/test')
  async test() {
    await this.puppeteer.test();

    return { message: true };
  }

  @Get('/button-text')
  async buttonText() {
    const res = await this.puppeteer.buttonText();

    return res;
  }

  @Get('/spotlight-animes')
  async spotlightAnimes() {
    const res = await this.puppeteer.spotlightAnimes();

    return res;
  }
}
