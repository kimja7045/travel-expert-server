import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  private users = [
    { id: '1', name: 'John Doe', social: 'facebook' },
    { id: '2', name: 'Jane Doe', social: 'google' },
  ];

  create({ id, name, social }: CreateUserInput) {
    const user = {
      id,
      name,
      social,
    };
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find((user) => user.id === id);
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    const user = this.users.find((user) => user.id === id);
    if (updateUserInput.name) {
      user.name = updateUserInput.name;
    }
    if (updateUserInput.social) {
      user.social = updateUserInput.social;
    }
    return user;
  }

  remove(id: string) {
    this.users = this.users.filter((user) => user.id !== id);
    return this.users;
  }
}
