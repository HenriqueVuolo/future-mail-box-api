import {Mail} from '@domain/entities/mail.entity';
import {MailsRepository} from '@domain/repositories/mails.repository';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {PrismaMailMapper} from '../mappers/prisma-mails.mapper';
import {PrismaService} from '../prisma.service';

const SEND_LIMIT_PER_USER = Number(process.env.SEND_LIMIT_PER_USER) || 5;

@Injectable()
export class PrismaMailsRepository implements MailsRepository {
  constructor(private prisma: PrismaService) {}

  async create(mail: Mail): Promise<void> {
    const {title, content, to, sendAt, userId, status} = mail;

    const userExist = await this.prisma.user.findUnique({
      where: {id: userId},
    });
    if (!userExist) throw new NotFoundException('Usuário não existe.');

    const sentEmail = await this.prisma.mail.count({where: {userId}});
    if (sentEmail > SEND_LIMIT_PER_USER)
      throw new BadRequestException(
        'Não foi possível criar uma nova mensagem, você alcançou o limite.',
      );

    await this.prisma.mail.create({
      data: {
        title,
        content,
        status,
        to,
        sendAt,
        userId,
      },
    });
  }

  async save(mail: Mail): Promise<void> {
    const raw = PrismaMailMapper.toPrisma(mail);

    await this.prisma.mail.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }

  async findOne(data: Partial<Mail>): Promise<Mail> {
    const mail = await this.prisma.mail.findFirst({where: data});
    return PrismaMailMapper.toDomain(mail);
  }

  async findMany(data: Partial<Mail>): Promise<Mail[]> {
    const mails = await this.prisma.mail.findMany({where: data});
    return mails.map((mail) => PrismaMailMapper.toDomain(mail));
  }

  async delete(id: Mail['id']): Promise<void> {
    await this.prisma.mail.delete({where: {id}});
  }
}
