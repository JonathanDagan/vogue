import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { EnvironmentsModule } from './environments/environments.module';
import { NetworksModule } from './networks/networks.module';
import { LocationsModule } from './locations/locations.module';

@Module({
  imports: [PrismaModule, EnvironmentsModule, NetworksModule, LocationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
