import {User} from '@domain/entities/users.entity';
import {Injectable} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';

@Injectable()
export class GenerateToken {
  constructor(private jwtService: JwtService) {}

  async execute(user: User): Promise<{accessToken: string}> {
    const jwtToken = this.jwtService.sign({sub: user.id, email: user.email});

    return {
      accessToken: jwtToken,
    };
  }
}
