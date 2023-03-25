import {User} from '@domain/entities/user.entity';
import {Injectable} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {GetUser} from '@useCases/user/get-user';

export type SigninResponse = {
  accessToken: string;
  user: Pick<User, 'id' | 'firstname' | 'lastname' | 'email'>;
};
@Injectable()
export class GenerateToken {
  constructor(private jwtService: JwtService, private getUser: GetUser) {}

  async execute(user: Pick<User, 'id' | 'email'>): Promise<SigninResponse> {
    const {id, firstname, lastname, email} = await this.getUser.execute(
      user?.id,
    );
    const authorizedUser = {id, firstname, lastname, email};
    const jwtToken = this.jwtService.sign({sub: user.id, email: user.email});

    return {
      accessToken: jwtToken,
      user: authorizedUser,
    };
  }
}
