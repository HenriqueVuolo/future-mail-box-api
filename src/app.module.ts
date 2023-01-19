import {JwtStrategy} from '@infra/auth/strategies/jwt.strategy';
import {LocalStrategy} from '@infra/auth/strategies/local.strategy';
import {DatabaseModule} from '@infra/database/database.module';
import {HttpModule} from '@infra/http/http.module';
import {SendAtHandler} from '@infra/messaging/send-at.handler';
import {Module} from '@nestjs/common';
import {ScheduleModule} from '@nestjs/schedule';
import {SendMail} from '@useCases/mail/send-mail';
import {ValidateUser} from '@useCases/user/validate-user';

@Module({
  imports: [DatabaseModule, HttpModule, ScheduleModule.forRoot()],
  providers: [
    ValidateUser,
    SendMail,
    LocalStrategy,
    JwtStrategy,
    SendAtHandler,
  ],
})
export class AppModule {}
