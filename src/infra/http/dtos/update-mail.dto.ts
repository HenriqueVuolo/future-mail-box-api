import {ApiProperty} from '@nestjs/swagger';
import {IsEmail, IsOptional} from 'class-validator';

export class UpdateMailDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  @IsOptional()
  @IsEmail()
  to: string;

  @ApiProperty()
  sendAt: Date;
}
