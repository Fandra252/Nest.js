import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getAllUsers() {
    return this.userService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    return this.userService.findById(id);
  }
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  @Put(':id')
  updateUser(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }
  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
