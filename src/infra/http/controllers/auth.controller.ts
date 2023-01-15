import {User} from '@domain/entities/users.entity';
import {LocalAuthGuard} from '@infra/auth/guards/local-auth.guard';
import {Body, Controller, Post, Req, UseGuards} from '@nestjs/common';
import {ApiOperation, ApiTags} from '@nestjs/swagger';
import {CreateUser} from '@useCases/create-user';
import {GenerateToken} from '@useCases/generate-token';
import {SignUpRequest} from '../dtos/sign-up-request';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(
    private createUser: CreateUser,
    private generateToken: GenerateToken,
  ) {}

  @Post('signup')
  @ApiOperation({description: 'Signup'})
  async signup(@Body() payload: SignUpRequest): Promise<void> {
    await this.createUser.execute(payload);
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @ApiOperation({description: 'Login'})
  async login(
    @Req() req: Request & {user: User},
  ): Promise<{accessToken: string}> {
    return await this.generateToken.execute(req.user);
  }
}
