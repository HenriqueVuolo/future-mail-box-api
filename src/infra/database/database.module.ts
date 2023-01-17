import {Module} from '@nestjs/common';

import {PrismaService} from './prisma/prisma.service';
import {PrismaUsersRepository} from './prisma/repositories/prisma-users.repository';
import {UsersRepository} from '@domain/repositories/users.repository';
import {MailsRepository} from '@domain/repositories/mails.repository';
import {PrismaMailsRepository} from './prisma/repositories/prisma-mails.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },
    {
      provide: MailsRepository,
      useClass: PrismaMailsRepository,
    },
  ],
  exports: [UsersRepository, MailsRepository],
})
export class DatabaseModule {}
