import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AircraftModule } from './aircraft/aircraft.module';
import { MaintenanceModule } from './maintenance/maintenance.module';

@Module({
  imports: [HttpModule, AircraftModule, MaintenanceModule],
})
export class AppModule {}
