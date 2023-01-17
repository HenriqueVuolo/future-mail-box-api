import {JwtAuthGuard} from '@infra/auth/guards/jwt-auth.guard';
import {Body, Controller, Post, Req, UseGuards} from '@nestjs/common';
import {ApiOperation, ApiTags} from '@nestjs/swagger';
import {CreateMail} from '@useCases/message/create-mail';
import {CreateMailDto} from '../dtos/create-mail.dto';
import {AuthenticatedRequest} from '../requests/authenticated.request';

@Controller('mail')
@ApiTags('mail')
@UseGuards(JwtAuthGuard)
export class MailController {
  constructor(private createMail: CreateMail) {}
  @Post()
  @ApiOperation({description: 'Create mail'})
  async create(
    @Req() request: AuthenticatedRequest,
    @Body() {title, content, sendAt, to}: CreateMailDto,
  ): Promise<void> {
    await this.createMail.execute({
      title,
      content,
      sendAt,
      to,
      userId: request.user.id,
    });
  }
}
