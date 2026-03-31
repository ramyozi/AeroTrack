import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { AircraftService } from './aircraft.service';

@Controller('aircraft')
export class AircraftController {
  constructor(private readonly aircraftService: AircraftService) {}

  @Get()
  findAll(@Query('status') status?: string) {
    return this.aircraftService.findAll(status);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aircraftService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.aircraftService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.aircraftService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aircraftService.remove(id);
  }
}
