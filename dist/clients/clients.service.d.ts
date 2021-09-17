import { CreateClientInput } from './dto/create-client.input';
import { UpdateClientInput } from './dto/update-client.input';
import { PrismaService } from '../prisma.service';
export declare class ClientsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateClientInput): Promise<import(".prisma/client").Client>;
    findAll(): Promise<import(".prisma/client").Client[]>;
    findOne(id: number): Promise<import(".prisma/client").Client>;
    update(id: number, data: UpdateClientInput): Promise<import(".prisma/client").Client>;
    remove(id: number): Promise<import(".prisma/client").Client>;
}
