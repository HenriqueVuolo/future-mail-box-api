import {LocalAuthGuard} from '@infra/auth/guards/local-auth.guard';
import {Body, Controller, Post, Req, UseGuards} from '@nestjs/common';
import {ApiBody, ApiOperation, ApiTags} from '@nestjs/swagger';
import {GenerateToken} from '@useCases/auth/generate-token';
import {CreateUser} from '@useCases/user/create-user';
import {LoginDto} from '../dtos/login.dto';
import {SignUpDto} from '../dtos/sign-up.dto';
import {AuthenticatedRequest} from '../requests/authenticated.request';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(
    private createUser: CreateUser,
    private generateToken: GenerateToken,
  ) {}

  @Post('signup')
  @ApiOperation({description: 'Signup'})
  async signup(@Body() payload: SignUpDto): Promise<void> {
    await this.createUser.execute(payload);
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @ApiOperation({description: 'Login'})
  @ApiBody({type: LoginDto})
  async login(
    @Req() req: AuthenticatedRequest,
  ): Promise<{accessToken: string}> {
    return await this.generateToken.execute(req.user);
  }
}
