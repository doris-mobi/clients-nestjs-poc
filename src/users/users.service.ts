import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const createdClient = await this.prisma.user.create({ data });
    console.log({ createdClient });
    return createdClient;
  }

  async findAll() {
    const client = await this.prisma.user.findMany();
    return client;
  }

  async findOne(id: number) {
    const client = await this.prisma.user.findUnique({ where: { id } });
    return client;
  }

  async update(id: number, data: UpdateUserDto) {
    const updatedClient = await this.prisma.user.update({ where: { id }, data });
    return updatedClient;
  }

  async remove(id: number) {
    const deletedClient = await this.prisma.user.delete({ where: { id } });
    return deletedClient;
  }
}
