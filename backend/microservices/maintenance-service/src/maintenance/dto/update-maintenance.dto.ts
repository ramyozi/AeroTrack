import { IsString, IsEnum, IsNumber, IsOptional, Min } from 'class-validator';
import {
  MaintenanceType,
  MaintenanceStatus,
  MaintenancePriority,
} from '../entities/maintenance.entity';

export class UpdateMaintenanceDto {
  @IsEnum(MaintenanceType)
  @IsOptional()
  type?: MaintenanceType;

  @IsEnum(MaintenanceStatus)
  @IsOptional()
  status?: MaintenanceStatus;

  @IsEnum(MaintenancePriority)
  @IsOptional()
  priority?: MaintenancePriority;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  scheduledDate?: string;

  @IsString()
  @IsOptional()
  completedDate?: string;

  @IsNumber()
  @Min(1)
  @IsOptional()
  estimatedDuration?: number;

  @IsString()
  @IsOptional()
  technician?: string;

  @IsString()
  @IsOptional()
  notes?: string;
}
