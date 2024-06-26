import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './user/entities/user.entity';
import user from '@prisma/client';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
