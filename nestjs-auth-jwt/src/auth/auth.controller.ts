import {
  Body,
  Controller,
  Get,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Public } from 'src/public/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('users')
  async getUser() {
    return await this.authService.getUsers();
  }

  @Public()
  @Post('signin')
  async signIn(@Body() dto: AuthDto) {
    try {
      const user = await this.authService.signIn(dto);

      if (!user) throw Error();

      return user;
    } catch (error) {
      throw new UnauthorizedException('Incorrect email or password');
    }
  }
}
