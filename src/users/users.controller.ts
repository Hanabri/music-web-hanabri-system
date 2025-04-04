import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('add')
  async create(@Body() user: User) {
    return this.usersService.create(user);
  }

  @Get('getList')
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
