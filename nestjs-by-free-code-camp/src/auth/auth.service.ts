import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  async signup(dto: AuthDto) {
    try {
      const user = await this.prismaService.user.create({
        data: {
          email: dto.email,
          password: dto.password,
        },
      });

      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }

      throw error;
    }
  }

  async signin(dto: AuthDto) {
    try {
      const user = await this.prismaService.user.findFirst({
        where: {
          AND: {
            email: dto.email,
            password: dto.password,
          },
        },
      });

      if (user) return user;
      else return 'No user found with that credentials';
    } catch (error) {
      throw new ForbiddenException('Sign in error');
    }
  }
}
