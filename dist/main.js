"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const app_module_1 = require("./app.module");
const prisma_service_1 = require("./prisma.service");
const cluster_service_1 = require("./cluster.service");
const bootstrap = async () => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter());
    const prismaService = app.get(prisma_service_1.PrismaService);
    prismaService.enableShutdownHooks(app);
    await app.listen(3000, '0.0.0.0');
    console.log(`Application is running on: ${await app.getUrl()}/graphql`);
};
cluster_service_1.AppClusterService.clusterize(bootstrap);
//# sourceMappingURL=main.js.map