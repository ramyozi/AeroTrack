import { IsString, IsNumber, IsEnum, IsOptional, Min, Max } from 'class-validator';
import { AircraftStatus } from '../entities/aircraft.entity';

export class CreateAircraftDto {
  @IsString()
  registration: string;

  @IsString()
  model: string;

  @IsString()
  manufacturer: string;

  @IsNumber()
  @Min(1950)
  @Max(2030)
  yearOfManufacture: number;

  @IsNumber()
  @Min(0)
  totalFlightHours: number;

  @IsEnum(AircraftStatus)
  @IsOptional()
  status?: AircraftStatus;
}
