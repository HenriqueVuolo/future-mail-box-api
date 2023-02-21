import {JwtAuthGuard} from '@infra/auth/guards/jwt-auth.guard';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import {ApiOperation, ApiTags} from '@nestjs/swagger';
import {Mail} from '@prisma/client';
import {CreateMail} from '@useCases/mail/create-mail';
import {DeleteMail} from '@useCases/mail/delete-mail';
import {FindMailById} from '@useCases/mail/find-mail-by-id';
import {FindMailsByUserId} from '@useCases/mail/find-mails-by-user-id';
import {UpdateMail} from '@useCases/mail/update-mail';
import {CreateMailDto} from '../dtos/create-mail.dto';
import {UpdateMailDto} from '../dtos/update-mail.dto';
import {AuthenticatedRequest} from '../requests/authenticated.request';

@Controller('mail')
@ApiTags('mail')
@UseGuards(JwtAuthGuard)
export class MailController {
  constructor(
    private createMail: CreateMail,
    private updateMail: UpdateMail,
    private getMail: FindMailById,
    private getMailsByUser: FindMailsByUserId,
    private deleteMail: DeleteMail,
  ) {}

  @Post()
  @ApiOperation({description: 'Create mail'})
  async create(
    @Req() request: AuthenticatedRequest,
    @Body() {subject, content, sendAt, to}: CreateMailDto,
  ): Promise<void> {
    await this.createMail.execute({
      subject,
      content,
      sendAt,
      to,
      userId: request.user.id,
    });
  }

  @Get(':id')
  @ApiOperation({description: 'Get mail by id'})
  async getOne(
    @Req() request: AuthenticatedRequest,
    @Param('id') id: string,
  ): Promise<Mail> {
    return await this.getMail.execute(id, request.user.id);
  }

  @Get()
  @ApiOperation({description: 'Get all mails from user'})
  async getAll(@Req() request: AuthenticatedRequest): Promise<Mail[]> {
    return await this.getMailsByUser.execute(request.user.id);
  }

  @Put(':id')
  @ApiOperation({description: 'Update mail'})
  async update(
    @Req() request: AuthenticatedRequest,
    @Body() body: UpdateMailDto,
    @Param('id') id: string,
  ): Promise<void> {
    const userId = request.user.id;
    await this.updateMail.execute(id, userId, body);
  }

  @Delete(':id')
  @ApiOperation({description: 'Delete mail'})
  async delete(
    @Req() request: AuthenticatedRequest,
    @Param('id') id: string,
  ): Promise<void> {
    await this.deleteMail.execute(id, request.user.id);
  }
}
