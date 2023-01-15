import {User} from '@domain/entities/users.entity';
import {User as RawUser} from '@prisma/client';

export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      createdAt: user.createdAt,
    };
  }

  static toDomain(raw: RawUser): User {
    return new User(
      {
        firstName: raw.firstName,
        lastName: raw.lastName,
        email: raw.email,
        password: raw.password,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
