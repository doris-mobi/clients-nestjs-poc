"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppClusterService = void 0;
const cluster = require("cluster");
const os = require("os");
const common_1 = require("@nestjs/common");
const numCPUs = os.cpus().length;
let AppClusterService = class AppClusterService {
    static clusterize(callback) {
        if (this.clusterInstance.isMaster) {
            console.log(`Primary server started on ${process.pid}`);
            for (let i = 0; i < numCPUs; i++) {
                this.clusterInstance.fork();
            }
            this.clusterInstance.on('exit', (worker) => {
                console.log(`Worker ${worker.process.pid} died. Restarting`);
                this.clusterInstance.fork();
            });
        }
        else {
            console.log(`Cluster server started on ${process.pid}`);
            callback();
        }
    }
};
AppClusterService.clusterInstance = cluster;
AppClusterService = __decorate([
    (0, common_1.Injectable)()
], AppClusterService);
exports.AppClusterService = AppClusterService;
//# sourceMappingURL=cluster.service.js.map