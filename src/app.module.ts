import {JwtStrategy} from '@infra/auth/strategies/jwt.strategy';
import {LocalStrategy} from '@infra/auth/strategies/local.strategy';
import {DatabaseModule} from '@infra/database/database.module';
import {HttpModule} from '@infra/http/http.module';
import {Module} from '@nestjs/common';
import {ValidateUser} from '@useCases/user/validate-user';

@Module({
  imports: [DatabaseModule, HttpModule],
  providers: [ValidateUser, LocalStrategy, JwtStrategy],
})
export class AppModule {}
