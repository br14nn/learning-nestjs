import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthDto, UserDto } from './dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private users: UsersService,
    private jwtService: JwtService,
  ) {}

  async getUsers() {
    return await this.users.getAllUsers();
  }

  async signIn(dto: AuthDto) {
    const user = (await this.users.findUser(dto)) as UserDto;

    if (!user) return user;

    const payload = { sub: user.id, emai: user.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
