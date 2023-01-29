import {MailsRepository} from '@domain/repositories/mails.repository';
import {Injectable} from '@nestjs/common';
import {Cron, CronExpression} from '@nestjs/schedule';

@Injectable()
export class SendMail {
  constructor(private mailsRepository: MailsRepository) {}

  @Cron(CronExpression.EVERY_6_HOURS)
  async execute(): Promise<void> {
    const mails = await this.mailsRepository.findMany({
      sendAt: {lte: new Date().toISOString()} as unknown as Date,
      status: 'PENDING',
    });

    mails.forEach(async (mail) => {
      console.log('Chama microservice de envio de e-mail:', mail);
      mail.send();
      await this.mailsRepository.save(mail);
    });
  }
}
