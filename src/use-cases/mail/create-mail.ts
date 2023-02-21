import {Mail, MailStatus} from '@domain/entities/mail.entity';
import {MailsRepository} from '@domain/repositories/mails.repository';
import {Injectable} from '@nestjs/common';

interface CreateMailRequest {
  subject: string;
  content: string;
  status?: MailStatus;
  userId: string;
  to: string;
  sendAt: Date;
}

@Injectable()
export class CreateMail {
  constructor(private mailsRepository: MailsRepository) {}

  async execute(payload: CreateMailRequest): Promise<void> {
    const mail = new Mail(payload);
    await this.mailsRepository.create(mail);
  }
}
