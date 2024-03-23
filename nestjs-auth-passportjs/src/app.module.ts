import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [PrismaModule, AuthModule, UsersModule, ProductsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
