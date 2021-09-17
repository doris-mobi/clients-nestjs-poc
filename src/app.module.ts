import { Module } from '@nestjs/common';
// import { GraphQLModule } from '@nestjs/graphql';

// import { ClientsModule } from './clients/clients.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
})
export class AppModule {}
