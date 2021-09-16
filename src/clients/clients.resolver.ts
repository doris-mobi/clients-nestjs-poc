import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import { ClientsService } from './clients.service';
import { Client } from './entities/client.entity';

import { CreateClientInput } from './dto/create-client.input';
import { UpdateClientInput } from './dto/update-client.input';

@Resolver(() => Client)
export class ClientsResolver {
  constructor(private readonly clientsService: ClientsService) {}

  @Mutation(() => Client)
  createClient(@Args('client') client: CreateClientInput) {
    return this.clientsService.create(client);
  }

  @Query(() => [Client], { name: 'clients' })
  findAll(): Promise<Client[]> {
    return this.clientsService.findAll();
  }

  @Query(() => Client, { name: 'client' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.clientsService.findOne(id);
  }

  @Mutation(() => Client)
  updateClient(@Args('client') client: UpdateClientInput) {
    return this.clientsService.update(client.id, client);
  }

  @Mutation(() => Client)
  removeClient(@Args('id', { type: () => Int }) id: number) {
    return this.clientsService.remove(id);
  }
}