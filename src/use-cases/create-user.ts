import {User} from '@domain/entities/user.entity';
import {UsersRepository} from '@domain/repositories/users.repository';
import {Injectable} from '@nestjs/common';

interface CreateUserRequest {
  firstname: string;
  lastname: string;
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
