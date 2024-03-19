import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable() // or providers in docs
export class NinjasService {
  private ninjas = [
    {
      id: 0,
      name: 'ninjaA',
      weapon: 'Kunai',
    },
    {
      id: 1,
      name: 'ninjaB',
      weapon: 'Shuriken',
    },
  ];

  getNinjas(weapon?: 'Kunai' | 'Shuriken') {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }

    return this.ninjas;
  }

  getNinja(id: number) {
    const ninja = this.ninjas.filter((ninja) => ninja.id === id);

    if (ninja.length <= 0) {
      throw new Error('ninja not found');
    }

    return ninja;
  }

  createNinja(createNinjaDto: CreateNinjaDto) {
    const id = this.ninjas.length;

    this.ninjas.push({
      id: id,
      ...createNinjaDto,
    });

    return this.ninjas;
  }

  updateNinja(id: number, updateNinjaDto: UpdateNinjaDto) {
    this.ninjas = this.ninjas.map((ninja) => {
      if (ninja.id === id) {
        return {
          ...ninja,
          ...updateNinjaDto,
        };
      }

      return ninja;
    });

    return this.getNinja(id);
  }
}
