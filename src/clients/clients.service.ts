import { Injectable } from '@nestjs/common';

import { CreateClientInput } from './dto/create-client.input';
import { UpdateClientInput } from './dto/update-client.input';

import { PrismaService } from '../prisma.service';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateClientInput) {
    const createdClient = await this.prisma.client.create({ data });
    return createdClient;
  }

  async findAll() {
    const client = await this.prisma.client.findMany();
    return client;
  }

  async findOne(id: number) {
    const client = await this.prisma.client.findUnique({ where: { id } });
    return client;
  }

  async update(id: number, data: UpdateClientInput) {
    const updatedClient = await this.prisma.client.update({ where: { id }, data });
    return updatedClient;
  }

  async remove(id: number) {
    const deletedClient = await this.prisma.client.delete({ where: { id } });
    return deletedClient;
  }
}
