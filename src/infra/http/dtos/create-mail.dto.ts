import {ApiProperty} from '@nestjs/swagger';
import {IsEmail, IsNotEmpty} from 'class-validator';

export class CreateMailDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  content: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  to: string;

  @ApiProperty()
  @IsNotEmpty()
  sendAt: Date;
}
