import {DatabaseModule} from '@infra/database/database.module';
import {Module} from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import {GenerateToken} from '@useCases/auth/generate-token';
import {CreateMail} from '@useCases/mail/create-mail';
import {DeleteMail} from '@useCases/mail/delete-mail';
import {FindMailsByUserId} from '@useCases/mail/find-mails-by-user-id';
import {FindMailById} from '@useCases/mail/find-mail-by-id';
import {UpdateMail} from '@useCases/mail/update-mail';
import {CreateUser} from '@useCases/user/create-user';
import {GetUser} from '@useCases/user/get-user';
import {UpdateUserEmail} from '@useCases/user/update-user-email';
import {AuthController} from './controllers/auth.controller';
import {MailController} from './controllers/mail.controller';
import {UserController} from './controllers/user.controller';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {expiresIn: '6h'},
    }),
  ],
  controllers: [AuthController, UserController, MailController],
  providers: [
    CreateMail,
    CreateUser,
    DeleteMail,
    FindMailById,
    FindMailsByUserId,
    GenerateToken,
    GetUser,
    UpdateMail,
    UpdateUserEmail,
  ],
})
export class HttpModule {}
