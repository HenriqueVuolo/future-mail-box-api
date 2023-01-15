import {User} from '@domain/entities/users.entity';
import {UsersRepository} from '@domain/repositories/users.repository';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {compare} from 'bcrypt';

interface ValidateUserRequest {
  email: string;
  password: string;
}

@Injectable()
export class ValidateUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute({email, password}: ValidateUserRequest): Promise<User> {
    const user = await this.usersRepository.findByEmail(email);

    if (user) {
      const isValid = await compare(password, user.password);

      user.hidePassword();

      if (isValid) {
        return user;
      }
    }

    throw new UnauthorizedException();
  }
}
