import {DatabaseModule} from '@infra/database/database.module';
import {Module} from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import {GenerateToken} from '@useCases/auth/generate-token';
import {CreateUser} from '@useCases/user/create-user';
import {GetUser} from '@useCases/user/get-user';
import {UpdateUserEmail} from '@useCases/user/update-user-email';
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
  providers: [CreateUser, GenerateToken, GetUser, UpdateUserEmail],
})
export class HttpModule {}
