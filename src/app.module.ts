import {Module} from '@nestjs/common';
import {PrismaService} from './database/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
