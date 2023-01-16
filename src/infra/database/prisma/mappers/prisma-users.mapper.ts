import {User} from '@domain/entities/user.entity';
import {User as RawUser} from '@prisma/client';

export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
      createdAt: user.createdAt,
    };
  }

  static toDomain(raw: RawUser): User {
    return new User(
      {
        firstname: raw.firstname,
        lastname: raw.lastname,
        email: raw.email,
        password: raw.password,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
