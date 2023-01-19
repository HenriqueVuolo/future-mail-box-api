import {Mail} from '@domain/entities/mail.entity';
import {MailsRepository} from '@domain/repositories/mails.repository';
import {Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class DeleteMail {
  constructor(private mailsRepository: MailsRepository) {}

  async execute(id: Mail['id'], userId: Mail['userId']): Promise<void> {
    const mail = await this.mailsRepository.findOne({id, userId});

    if (!mail) throw new NotFoundException();

    await this.mailsRepository.delete(id);
  }
}
