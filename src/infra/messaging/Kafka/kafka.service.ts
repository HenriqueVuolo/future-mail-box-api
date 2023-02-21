import {Injectable, OnModuleDestroy, OnModuleInit} from '@nestjs/common';
import {ClientKafka} from '@nestjs/microservices';

@Injectable()
export class KafkaService
  extends ClientKafka
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'mails',
        brokers: [process.env.KAFKA_BROKER],
        sasl: {
          mechanism: 'scram-sha-256',
          username: process.env.KAFKA_USERNAME,
          password: process.env.KAFKA_PASSWORD,
        },
        ssl: true,
      },
    });
  }

  async onModuleInit() {
    await this.connect();
  }

  async onModuleDestroy() {
    await this.close();
  }
}
