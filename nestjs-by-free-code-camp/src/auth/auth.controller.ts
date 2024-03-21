import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/index';

/* 
Contoller is used for handling request/response.
They also execute functions in service.
*/

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body(new ValidationPipe()) dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @Post('signin')
  signin(@Body(new ValidationPipe()) dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
