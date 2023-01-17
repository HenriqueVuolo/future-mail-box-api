import {Mail} from '@domain/entities/mail.entity';

export abstract class MailsRepository {
  abstract create: (data: Mail) => Promise<void>;
}
