import { ClientsService } from './clients.service';
import { Client } from './entities/client.entity';
import { CreateClientInput } from './dto/create-client.input';
import { UpdateClientInput } from './dto/update-client.input';
export declare class ClientsResolver {
    private readonly clientsService;
    constructor(clientsService: ClientsService);
    createClient(client: CreateClientInput): Promise<import(".prisma/client").Client>;
    findAll(): Promise<Client[]>;
    findOne(id: number): Promise<import(".prisma/client").Client>;
    updateClient(client: UpdateClientInput): Promise<import(".prisma/client").Client>;
    removeClient(id: number): Promise<import(".prisma/client").Client>;
}
