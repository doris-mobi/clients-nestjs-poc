import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [ClientsModule, GraphQLModule.forRoot({ autoSchemaFile: true })],
})
export class AppModule {}
