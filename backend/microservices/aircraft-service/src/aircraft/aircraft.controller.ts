import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { AircraftService } from './aircraft.service';
import { CreateAircraftDto } from './dto/create-aircraft.dto';
import { UpdateAircraftDto } from './dto/update-aircraft.dto';

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
  create(@Body() dto: CreateAircraftDto) {
    return this.aircraftService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateAircraftDto) {
    return this.aircraftService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aircraftService.remove(id);
  }
}
