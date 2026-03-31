import { Controller, Get, Post, Put, Param, Body, Query } from '@nestjs/common';
import { MaintenanceService } from './maintenance.service';

@Controller('maintenance')
export class MaintenanceController {
  constructor(private readonly maintenanceService: MaintenanceService) {}

  @Get()
  findAll(@Query('aircraftId') aircraftId?: string, @Query('status') status?: string) {
    return this.maintenanceService.findAll(aircraftId, status);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.maintenanceService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.maintenanceService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.maintenanceService.update(id, body);
  }

  @Get('aircraft/:aircraftId/upcoming')
  getUpcoming(@Param('aircraftId') aircraftId: string) {
    return this.maintenanceService.getUpcoming(aircraftId);
  }
}
