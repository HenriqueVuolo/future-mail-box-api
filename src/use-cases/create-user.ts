import {User} from '@domain/entities/users.entity';
import {UsersRepository} from '@domain/repositories/users.repository';
import {Injectable} from '@nestjs/common';

interface CreateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

@Injectable()
export class CreateUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute(payload: CreateUserRequest): Promise<void> {
    const user = new User(payload);
    await this.usersRepository.create(user);
  }
}
