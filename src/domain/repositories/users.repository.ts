import {User} from '@domain/entities/user.entity';

export abstract class UsersRepository {
  abstract create: (data: User) => Promise<void>;
  abstract findByEmail: (email: User['email']) => Promise<User | null>;
  abstract findById: (id: User['id']) => Promise<User | null>;
  abstract save: (user: User) => Promise<void>;
}
