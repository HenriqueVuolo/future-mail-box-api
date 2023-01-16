import {User} from '@domain/entities/user.entity';
import {UsersRepository} from '@domain/repositories/users.repository';
import {Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class GetUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute(id: string): Promise<User> {
    const user = await this.usersRepository.findById(id);
    if (!user) throw new NotFoundException('Usuário não encontrado.');

    user.hidePassword();
    return user;
  }
}
