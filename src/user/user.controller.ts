import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { instanceToPlain } from 'class-transformer';
import { UserDto, CreateUserDto, UpdateUserDto } from './user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() user: CreateUserDto): Promise<UserDto> {
    const created = await this.userService.create(user);
    return instanceToPlain(created) as UserDto;
  }

  @Get()
  async findAll(): Promise<UserDto[]> {
    const users = await this.userService.findAll();
    return users.map(user => instanceToPlain(user) as UserDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<UserDto | null> {
    const user = await this.userService.findOne(Number(id));
    return user ? (instanceToPlain(user) as UserDto) : null;
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() user: UpdateUserDto): Promise<UserDto | null> {
    const updated = await this.userService.update(Number(id), user);
    return updated ? (instanceToPlain(updated) as UserDto) : null;
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.userService.remove(Number(id));
  }
}
