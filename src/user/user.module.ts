import { Module } from '@nestjs/common';
import { UserService } from './user.service';
// import { User } from './entities/user.entity';
import { user } from '@prisma/client';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
