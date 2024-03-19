import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { NinjasService } from './ninjas.service';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { BeltGuard } from 'src/belt/belt.guard';

@Controller('ninjas')
@UseGuards(BeltGuard)
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {} // this is a practice for calling service in NestJS

  @Get()
  getNinjas(@Query('weapon') weapon: 'Kunai' | 'Shuriken') {
    return this.ninjasService.getNinjas(weapon);
  }

  @Get(':id')
  getOneNinja(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.ninjasService.getNinja(id); // this plus symbol here translates the id which is a str originally into a number
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Post()
  createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto) {
    return this.ninjasService.createNinja({ ...createNinjaDto });
  }

  @Put(':id')
  updateNinja(@Param() id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return this.ninjasService.updateNinja(+id, { ...updateNinjaDto });
  }
}

// GET /ninjas --> []
// GET /ninjas/:id --> { ... }
// POST /ninjas
// PUT /ninjas/:id --> { ... }
// DELETE /ninjas/:id
