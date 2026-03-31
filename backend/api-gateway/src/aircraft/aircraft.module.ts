import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AircraftController } from './aircraft.controller';
import { AircraftService } from './aircraft.service';

@Module({
  imports: [HttpModule],
  controllers: [AircraftController],
  providers: [AircraftService],
})
export class AircraftModule {}
