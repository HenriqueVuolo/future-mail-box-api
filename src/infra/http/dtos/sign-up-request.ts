import {IsEmail, IsNotEmpty, IsString, Length} from 'class-validator';

export class SignUpRequest {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(8, 16, {message: 'Sua senha deve ter entre 8 e 16 caracteres.'})
  password: string;
}
