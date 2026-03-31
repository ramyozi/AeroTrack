import { IsString, IsNumber, IsEnum, IsOptional, Min, Max } from 'class-validator';
import { AircraftStatus } from '../entities/aircraft.entity';

export class UpdateAircraftDto {
  @IsString()
  @IsOptional()
  registration?: string;

  @IsString()
  @IsOptional()
  model?: string;

  @IsString()
  @IsOptional()
  manufacturer?: string;

  @IsNumber()
  @Min(1950)
  @Max(2030)
  @IsOptional()
  yearOfManufacture?: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  totalFlightHours?: number;

  @IsEnum(AircraftStatus)
  @IsOptional()
  status?: AircraftStatus;

  @IsString()
  @IsOptional()
  lastMaintenanceDate?: string;

  @IsString()
  @IsOptional()
  nextMaintenanceDue?: string;
}
