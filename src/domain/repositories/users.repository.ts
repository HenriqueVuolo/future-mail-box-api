import {User} from '@domain/entities/users.entity';

export abstract class UsersRepository {
  abstract create: (data: User) => Promise<void>;
  abstract findByEmail: (email: User['email']) => Promise<User | null>;
}
