import {DatabaseModule} from '@infra/database/database.module';
import {Module} from '@nestjs/common';
import {CreateUser} from '@useCases/create-user';
import {AuthController} from './controllers/auth.controller';

@Module({
  imports: [DatabaseModule],
  providers: [CreateUser],
  controllers: [AuthController],
})
export class HttpModule {}
