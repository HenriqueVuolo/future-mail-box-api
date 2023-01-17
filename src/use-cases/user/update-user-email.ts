import {UsersRepository} from '@domain/repositories/users.repository';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

interface UpdateUserEmailRequest {
  id: string;
  email: string;
}

@Injectable()
export class UpdateUserEmail {
  constructor(private usersRepository: UsersRepository) {}

  async execute({id, email}: UpdateUserEmailRequest): Promise<void> {
    if (!id || !email) throw new BadRequestException();

    const user = await this.usersRepository.findById(id);
    if (!user) throw new NotFoundException('Usuário não encontrado.');

    const emailAlreadyExists = await this.usersRepository.findByEmail(email);
    if (emailAlreadyExists)
      throw new BadRequestException('Este e-mail já está em uso.');

    user.updateEmail(email);
    await this.usersRepository.save(user);
  }
}
