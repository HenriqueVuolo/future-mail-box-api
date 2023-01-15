import {DatabaseModule} from '@infra/database/database.module';
import {Module} from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import {CreateUser} from '@useCases/create-user';
import {GenerateToken} from '@useCases/generate-token';
import {AuthController} from './controllers/auth.controller';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {expiresIn: '6h'},
    }),
  ],
  controllers: [AuthController],
  providers: [CreateUser, GenerateToken],
})
export class HttpModule {}
