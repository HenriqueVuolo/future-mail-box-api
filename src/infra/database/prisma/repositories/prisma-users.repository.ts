import {User} from '@domain/entities/user.entity';
import {UsersRepository} from '@domain/repositories/users.repository';
import {BadRequestException, Injectable} from '@nestjs/common';
import {hash} from 'bcrypt';
import {PrismaUserMapper} from '../mappers/prisma-users.mapper';
import {PrismaService} from '../prisma.service';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}

  async create(user: User): Promise<void> {
    const {firstname, lastname, email, password} = user;

    const emailAlreadyExists = await this.prisma.user.findUnique({
      where: {email},
    });

    if (emailAlreadyExists)
      throw new BadRequestException('Este e-mail já está em uso.');

    await this.prisma.user.create({
      data: {
        firstname,
        lastname,
        email,
        password: await hash(password, 10),
      },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({where: {email}});

    if (!user) return null;

    return PrismaUserMapper.toDomain(user);
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({where: {id}});

    if (!user) return null;

    return PrismaUserMapper.toDomain(user);
  }

  async save(user: User): Promise<void> {
    const raw = PrismaUserMapper.toPrisma(user);

    await this.prisma.user.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }
}
