import { Injectable } from '@nestjs/common';
import { User } from '../domain/user/user';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUsersRepository } from './ports/UsersRepository.interface';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: IUsersRepository) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.save(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async findOne(userId: string): Promise<User> {
    return await this.userRepository.findOne(userId);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user with ${updateUserDto}`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
