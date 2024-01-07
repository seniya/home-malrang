import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async postJoin({ name, email, password }) {
    return await this.userRepo.save({
      name,
      email,
      password,
    });
  }

  getHello(): string {
    return 'Hello World!';
  }
}
