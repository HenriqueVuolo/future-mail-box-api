import {Mail} from '@domain/entities/mail.entity';

export abstract class MailsRepository {
  abstract create: (data: Mail) => Promise<void>;
  abstract save: (data: Mail) => Promise<void>;
  abstract findOne: (data: Partial<Mail>) => Promise<Mail>;
  abstract findMany: (data: Partial<Mail>) => Promise<Mail[]>;
  abstract delete: (id: Mail['id']) => Promise<void>;
}
