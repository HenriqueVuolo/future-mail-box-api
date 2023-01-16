import {DatabaseModule} from '@infra/database/database.module';
import {Module} from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import {CreateUser} from '@useCases/create-user';
import {GenerateToken} from '@useCases/generate-token';
import {GetUser} from '@useCases/get-user';
import {UpdateUserEmail} from '@useCases/update-user-email';
import {AuthController} from './controllers/auth.controller';
import {UserController} from './controllers/user.controller';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {expiresIn: '6h'},
    }),
  ],
  controllers: [AuthController, UserController],
  providers: [CreateUser, GenerateToken, UpdateUserEmail, GetUser],
})
export class HttpModule {}
