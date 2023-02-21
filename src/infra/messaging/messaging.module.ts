import {Module} from '@nestjs/common';

import {KafkaService} from '@messaging/kafka/kafka.service';

@Module({
  providers: [KafkaService],
  exports: [KafkaService],
})
export class MessagingModule {}
