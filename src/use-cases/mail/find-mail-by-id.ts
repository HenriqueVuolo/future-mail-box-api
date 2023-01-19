import {Mail} from '@domain/entities/mail.entity';
import {MailsRepository} from '@domain/repositories/mails.repository';
import {Injectable} from '@nestjs/common';

@Injectable()
export class FindMailById {
  constructor(private mailsRepository: MailsRepository) {}

  async execute(id: Mail['id'], userId: Mail['userId']): Promise<Mail> {
    return await this.mailsRepository.findOne({id, userId});
  }
}
