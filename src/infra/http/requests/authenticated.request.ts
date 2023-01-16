import {User} from '@domain/entities/user.entity';

export interface AuthenticatedRequest extends Request {
  user?: Pick<User, 'id' | 'email'>;
}
