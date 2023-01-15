import {User} from '@domain/entities/users.entity';
import {UsersRepository} from '@domain/repositories/users.repository';
import {BadRequestException, Injectable} from '@nestjs/common';
import {hash} from 'bcrypt';
import {PrismaUserMapper} from '../mappers/prisma-users.mapper';
import {PrismaService} from '../prisma.service';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}

  async create(user: User): Promise<void> {
    const {firstName, lastName, email, password} = user;

    const emailAlreadyExists = await this.prisma.user.findUnique({
      where: {email},
    });

    if (emailAlreadyExists)
      throw new BadRequestException('Este e-mail já está em uso.');

    await this.prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: await hash(password, 10),
      },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findFirst({where: {email}});

    if (!user) return null;

    return PrismaUserMapper.toDomain(user);
  }
}
