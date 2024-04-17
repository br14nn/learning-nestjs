import { Controller, Get } from '@nestjs/common';
import { GogoanimeService } from './gogoanime.service';

@Controller('gogoanime')
export class GogoanimeController {
  constructor(private gogoanimeService: GogoanimeService) {}

  @Get('test')
  async test() {
    return this.gogoanimeService.test();
  }
}
