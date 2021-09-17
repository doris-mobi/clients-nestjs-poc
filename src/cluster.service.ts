import * as cluster from 'cluster';
import * as os from 'os';
import { Injectable } from '@nestjs/common';

const numCPUs = os.cpus().length;

@Injectable()
export class AppClusterService {
  static clusterInstance: any = cluster;

  static clusterize(callback): void {
    if (this.clusterInstance.isMaster) {
      console.log(`Primary server started on ${process.pid}`);
      for (let i = 0; i < numCPUs; i++) {
        this.clusterInstance.fork();
      }
      this.clusterInstance.on('exit', (worker) => {
        console.log(`Worker ${worker.process.pid} died. Restarting`);
        this.clusterInstance.fork();
      });
    } else {
      console.log(`Cluster server started on ${process.pid}`);
      callback();
    }
  }
}
