import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { NotFoundError } from 'rxjs';

@Injectable()
export class UserService {
  private users = [{ id: 1, name: 'John Doe', email: 'john.doe@example.com' }];
  private idCounter = this.users.length;
  findAll() {
    return this.users;
  }
  findById(id: number) {
    return this.users.find((user) => user.id === id);
  }
  create(createUserDto: CreateUserDto) {
    const newUser = { id: ++this.idCounter, ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }
  update(id: number, updateUserDto: CreateUserDto) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) throw new NotFoundError('User not found');
    this.users[userIndex] = { id, ...updateUserDto };
    return this.users[userIndex];
  }
  delete(id: number) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) throw new NotFoundError('User not found');
    const deletedUser = this.users.splice(userIndex, 1);
    return deletedUser[0];
  }
}
