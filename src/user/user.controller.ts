import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Matches } from 'class-validator';
import { user } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * POST http://localhost:3000/user
   */
  @Post()
  create(@Body() user: user) {
    return this.userService.createUser(user);
  }

  /**
   * GET http://localhost:3000/user
   */
  @Get()
  findAll() {
    return this.userService.getAllUsers();
  }

  /**
   * GET http://localhost:3000/user/:id
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.getUserById(+id);
  }

  /**
   * PATCH http://localhost:3000/user/:id
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() user: user) {
    return this.userService.updateUser(+id, user);
  }

  /**
   * DELETE http://localhost:3000/user/:id
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.deleteUser(+id);
  }
}