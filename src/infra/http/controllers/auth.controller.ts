import {Body, Controller, Post} from '@nestjs/common';
import {CreateUser} from '@useCases/create-user';
import {SignUpRequest} from '../dtos/sign-up-request';

@Controller('auth')
export class AuthController {
  constructor(private createUser: CreateUser) {}
  @Post('signup')
  async signup(@Body() payload: SignUpRequest): Promise<void> {
    await this.createUser.execute(payload);
  }
}
