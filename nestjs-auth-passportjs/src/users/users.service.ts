import { ForbiddenException, Global, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOne(username: string, password: string) {
    return await this.prisma.user.findFirst({
      select: {
        id: true,
        username: true,
      },
      where: {
        AND: {
          username: username,
          password: password,
        },
      },
    });
  }
}
