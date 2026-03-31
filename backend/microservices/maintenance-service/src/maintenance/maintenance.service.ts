import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import {
  MaintenanceRecord,
  MaintenanceStatus,
  MaintenanceType,
  MaintenancePriority,
} from './entities/maintenance.entity';
import { CreateMaintenanceDto } from './dto/create-maintenance.dto';
import { UpdateMaintenanceDto } from './dto/update-maintenance.dto';

@Injectable()
export class MaintenanceService {
  private records: MaintenanceRecord[] = [
    {
      id: '1',
      aircraftId: '1',
      type: MaintenanceType.SCHEDULED,
      status: MaintenanceStatus.COMPLETED,
      priority: MaintenancePriority.MEDIUM,
      description: 'A-Check inspection - routine airframe and systems review',
      scheduledDate: '2025-11-15',
      completedDate: '2025-11-15',
      estimatedDuration: 48,
      technician: 'Jean-Pierre Martin',
      notes: 'All checks passed. Minor hydraulic seal replaced.',
      createdAt: '2025-10-01T08:00:00Z',
      updatedAt: '2025-11-15T18:00:00Z',
    },
    {
      id: '2',
      aircraftId: '2',
      type: MaintenanceType.OVERHAUL,
      status: MaintenanceStatus.IN_PROGRESS,
      priority: MaintenancePriority.HIGH,
      description: 'Engine overhaul - CFM56 left engine',
      scheduledDate: '2025-12-01',
      completedDate: null,
      estimatedDuration: 240,
      technician: 'Sophie Dubois',
      notes: 'Engine removed. Awaiting replacement parts from supplier.',
      createdAt: '2025-11-10T09:00:00Z',
      updatedAt: '2025-12-15T11:00:00Z',
    },
    {
      id: '3',
      aircraftId: '1',
      type: MaintenanceType.SCHEDULED,
      status: MaintenanceStatus.PENDING,
      priority: MaintenancePriority.MEDIUM,
      description: 'C-Check - comprehensive structural inspection',
      scheduledDate: '2026-05-15',
      completedDate: null,
      estimatedDuration: 720,
      technician: 'Jean-Pierre Martin',
      notes: '',
      createdAt: '2026-01-15T08:00:00Z',
      updatedAt: '2026-01-15T08:00:00Z',
    },
    {
      id: '4',
      aircraftId: '3',
      type: MaintenanceType.INSPECTION,
      status: MaintenanceStatus.PENDING,
      priority: MaintenancePriority.LOW,
      description: 'Landing gear visual inspection',
      scheduledDate: '2026-04-10',
      completedDate: null,
      estimatedDuration: 8,
      technician: 'Marc Lefevre',
      notes: 'Routine pre-season inspection',
      createdAt: '2026-03-01T10:00:00Z',
      updatedAt: '2026-03-01T10:00:00Z',
    },
    {
      id: '5',
      aircraftId: '5',
      type: MaintenanceType.UNSCHEDULED,
      status: MaintenanceStatus.PENDING,
      priority: MaintenancePriority.CRITICAL,
      description: 'Avionics system failure diagnostic',
      scheduledDate: '2026-02-01',
      completedDate: null,
      estimatedDuration: 72,
      technician: 'Sophie Dubois',
      notes: 'Aircraft grounded due to navigation system malfunction.',
      createdAt: '2025-10-10T14:00:00Z',
      updatedAt: '2025-10-15T09:00:00Z',
    },
    {
      id: '6',
      aircraftId: '4',
      type: MaintenanceType.SCHEDULED,
      status: MaintenanceStatus.PENDING,
      priority: MaintenancePriority.MEDIUM,
      description: 'B-Check - detailed systems and components review',
      scheduledDate: '2026-06-05',
      completedDate: null,
      estimatedDuration: 120,
      technician: 'Marc Lefevre',
      notes: '',
      createdAt: '2026-02-01T08:00:00Z',
      updatedAt: '2026-02-01T08:00:00Z',
    },
  ];

  findAll(aircraftId?: string, status?: string): MaintenanceRecord[] {
    let result = this.records;
    if (aircraftId) {
      result = result.filter((r) => r.aircraftId === aircraftId);
    }
    if (status) {
      result = result.filter((r) => r.status === status);
    }
    return result;
  }

  findOne(id: string): MaintenanceRecord {
    const record = this.records.find((r) => r.id === id);
    if (!record) {
      throw new NotFoundException(`Maintenance record with ID ${id} not found`);
    }
    return record;
  }

  create(dto: CreateMaintenanceDto): MaintenanceRecord {
    const now = new Date().toISOString();
    const record: MaintenanceRecord = {
      id: uuidv4(),
      aircraftId: dto.aircraftId,
      type: dto.type,
      status: MaintenanceStatus.PENDING,
      priority: dto.priority,
      description: dto.description,
      scheduledDate: dto.scheduledDate,
      completedDate: null,
      estimatedDuration: dto.estimatedDuration,
      technician: dto.technician,
      notes: dto.notes || '',
      createdAt: now,
      updatedAt: now,
    };

    this.records.push(record);
    return record;
  }

  update(id: string, dto: UpdateMaintenanceDto): MaintenanceRecord {
    const index = this.records.findIndex((r) => r.id === id);
    if (index === -1) {
      throw new NotFoundException(`Maintenance record with ID ${id} not found`);
    }

    this.records[index] = {
      ...this.records[index],
      ...dto,
      updatedAt: new Date().toISOString(),
    };

    return this.records[index];
  }

  getUpcoming(aircraftId: string): MaintenanceRecord[] {
    const now = new Date().toISOString().split('T')[0];
    return this.records
      .filter(
        (r) =>
          r.aircraftId === aircraftId &&
          r.status === MaintenanceStatus.PENDING &&
          r.scheduledDate >= now,
      )
      .sort((a, b) => a.scheduledDate.localeCompare(b.scheduledDate));
  }
}
