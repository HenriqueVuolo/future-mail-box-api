import {MailsRepository} from '@domain/repositories/mails.repository';
import {UsersRepository} from '@domain/repositories/users.repository';
import {KafkaService} from '@infra/messaging/kafka/kafka.service';
import {Injectable} from '@nestjs/common';
import {Cron, CronExpression} from '@nestjs/schedule';
import {mountMailPayload} from 'src/helpers/mountMailPayload';

@Injectable()
export class SendMail {
  constructor(
    private mailsRepository: MailsRepository,
    private usersRepository: UsersRepository,
    private kafkaService: KafkaService,
  ) {}

  @Cron(CronExpression.EVERY_6_HOURS)
  async execute(): Promise<void> {
    const mails = await this.mailsRepository.findMany({
      sendAt: {lte: new Date().toISOString()} as unknown as Date,
      status: 'PENDING',
    });

    mails.forEach(async (mail) => {
      const sender = await this.usersRepository.findById(mail?.userId);

      if (sender?.id) {
        this.kafkaService.emit(
          'mails.send-mail',
          mountMailPayload({mail, sender}),
        );
        mail.send();
      } else {
        mail.cancel();
      }
      await this.mailsRepository.save(mail);
    });
  }
}
