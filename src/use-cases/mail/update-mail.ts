import {Mail} from '@domain/entities/mail.entity';
import {MailsRepository} from '@domain/repositories/mails.repository';
import {PrismaMailMapper} from '@infra/database/prisma/mappers/prisma-mails.mapper';
import {Injectable, NotFoundException} from '@nestjs/common';

interface UpdateMailRequest {
  title?: string;
  content?: string;
  to?: string;
  sendAt?: Date;
}

@Injectable()
export class UpdateMail {
  constructor(private mailsRepository: MailsRepository) {}

  async execute(
    id: Mail['id'],
    userId: Mail['userId'],
    updateData: UpdateMailRequest,
  ): Promise<void> {
    const mail = await this.mailsRepository.findOne({
      id,
      userId,
      status: 'PENDING',
    });
    if (!mail) throw new NotFoundException('E-mail não encontrado.');

    const updatedMail = new Mail({
      ...PrismaMailMapper.toPrisma(mail),
      ...updateData,
    });

    await this.mailsRepository.save(updatedMail);
  }
}
