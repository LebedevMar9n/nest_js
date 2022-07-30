import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  private users = [];

  create(user: CreateUserDto) {
    this.users.push({
      ...user,
      id: new Date().valueOf(),
    })
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find((user) => user.id == id);
  }

  update(id: string, newUser: UpdateUserDto) {
    const oldUser = this.users.find((user) => user.id ==id);
    const userForResponce = Object.assign(oldUser, newUser);
    return userForResponce;
  }

  remove(id: string) {
    const index = this.users.findIndex((user) => user.id == id)
    if (index === -1) {
      return 'no such user'
    }
    return this.users.splice(index, 1);
  }
}
