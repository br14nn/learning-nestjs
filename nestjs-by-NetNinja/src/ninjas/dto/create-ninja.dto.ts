import { IsEnum, MinLength } from 'class-validator';

export class CreateNinjaDto {
  @MinLength(3)
  name: string;
  @IsEnum(['Kunai', 'Shuriken'], {
    message: 'Must use a correct weapon (Kunai/Shuriken)',
  })
  weapon: 'Kunai' | 'Shuriken';
}
