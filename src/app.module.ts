import {DatabaseModule} from '@infra/database/database.module';
import {HttpModule} from '@infra/http/http.module';
import {Module} from '@nestjs/common';

@Module({
  imports: [DatabaseModule, HttpModule],
  providers: [],
})
export class AppModule {}
