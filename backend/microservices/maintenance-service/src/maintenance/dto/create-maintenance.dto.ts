import { IsString, IsEnum, IsNumber, IsOptional, Min } from 'class-validator';
import {
  MaintenanceType,
  MaintenancePriority,
} from '../entities/maintenance.entity';

export class CreateMaintenanceDto {
  @IsString()
  aircraftId: string;

  @IsEnum(MaintenanceType)
  type: MaintenanceType;

  @IsEnum(MaintenancePriority)
  priority: MaintenancePriority;

  @IsString()
  description: string;

  @IsString()
  scheduledDate: string;

  @IsNumber()
  @Min(1)
  estimatedDuration: number;

  @IsString()
  technician: string;

  @IsString()
  @IsOptional()
  notes?: string;
}
