import {User} from '@domain/entities/user.entity';
import {Injectable} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';

@Injectable()
export class GenerateToken {
  constructor(private jwtService: JwtService) {}

  async execute(
    user: Pick<User, 'id' | 'email'>,
  ): Promise<{accessToken: string}> {
    const jwtToken = this.jwtService.sign({sub: user.id, email: user.email});

    return {
      accessToken: jwtToken,
    };
  }
}
