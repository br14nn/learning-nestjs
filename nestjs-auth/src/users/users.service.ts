import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAllUsers() {
    try {
      const users = await this.prisma.user.findMany({});

      return users;
    } catch (error) {
      throw new ForbiddenException();
    }
  }

  async findUser(dto: UserDto) {
    try {
      const user = await this.prisma.user.findFirst({
        select: {
          id: true,
          email: true,
        },
        where: {
          AND: {
            email: dto.email,
            password: dto.password,
          },
        },
      });

      return user;
    } catch (error) {
      return new ForbiddenException();
    }
  }
}
