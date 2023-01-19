import {Mail} from '@domain/entities/mail.entity';
import {MailsRepository} from '@domain/repositories/mails.repository';
import {Injectable} from '@nestjs/common';

@Injectable()
export class FindMailsByUserId {
  constructor(private mailsRepository: MailsRepository) {}

  async execute(userId: Mail['userId']): Promise<Mail[]> {
    return await this.mailsRepository.findMany({userId});
  }
}
