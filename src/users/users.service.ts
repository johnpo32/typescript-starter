import { Injectable, HttpException } from '@nestjs/common';
import { resolve } from 'path/posix';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { USERS } from './users.mock';

@Injectable()
export class UsersService {
  users = USERS;

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.users);
    });
  }

  findNames(nam: string): Promise<any> {
    return new Promise(resolve => {
      const names = this.users.filter(name => name.name == nam);
      if (names.length == 0) {
         throw new HttpException('User not found', 404);
      }
      resolve(names);
    })
  }

  findOne(id: number): Promise<any> {
    let uid = Number(id);
    return new Promise(resolve => {
      const user = this.users.find(user => user.id === uid);
      if (!user) {
        throw new HttpException('user does not exist', 404);
      }
      resolve(user);
    })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
