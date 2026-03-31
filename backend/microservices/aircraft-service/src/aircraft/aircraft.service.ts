import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Aircraft, AircraftStatus } from './entities/aircraft.entity';
import { CreateAircraftDto } from './dto/create-aircraft.dto';
import { UpdateAircraftDto } from './dto/update-aircraft.dto';

@Injectable()
export class AircraftService {
  private aircraft: Aircraft[] = [
    {
      id: '1',
      registration: 'F-GKXA',
      model: 'A320-214',
      manufacturer: 'Airbus',
      yearOfManufacture: 2015,
      totalFlightHours: 24500,
      status: AircraftStatus.ACTIVE,
      lastMaintenanceDate: '2025-11-15',
      nextMaintenanceDue: '2026-05-15',
      createdAt: '2024-01-10T08:00:00Z',
      updatedAt: '2025-11-15T14:30:00Z',
    },
    {
      id: '2',
      registration: 'F-HBXF',
      model: 'B737-800',
      manufacturer: 'Boeing',
      yearOfManufacture: 2012,
      totalFlightHours: 31200,
      status: AircraftStatus.IN_MAINTENANCE,
      lastMaintenanceDate: '2025-09-20',
      nextMaintenanceDue: '2026-03-20',
      createdAt: '2024-01-10T08:00:00Z',
      updatedAt: '2025-12-01T10:00:00Z',
    },
    {
      id: '3',
      registration: 'F-GLZP',
      model: 'A350-900',
      manufacturer: 'Airbus',
      yearOfManufacture: 2020,
      totalFlightHours: 8900,
      status: AircraftStatus.ACTIVE,
      lastMaintenanceDate: '2026-01-10',
      nextMaintenanceDue: '2026-07-10',
      createdAt: '2024-03-15T09:00:00Z',
      updatedAt: '2026-01-10T16:00:00Z',
    },
    {
      id: '4',
      registration: 'F-HTBA',
      model: 'B787-9',
      manufacturer: 'Boeing',
      yearOfManufacture: 2018,
      totalFlightHours: 18700,
      status: AircraftStatus.ACTIVE,
      lastMaintenanceDate: '2025-12-05',
      nextMaintenanceDue: '2026-06-05',
      createdAt: '2024-02-20T11:00:00Z',
      updatedAt: '2025-12-05T13:00:00Z',
    },
    {
      id: '5',
      registration: 'F-GRHK',
      model: 'A319-111',
      manufacturer: 'Airbus',
      yearOfManufacture: 2005,
      totalFlightHours: 52000,
      status: AircraftStatus.GROUNDED,
      lastMaintenanceDate: '2025-08-01',
      nextMaintenanceDue: '2026-02-01',
      createdAt: '2024-01-10T08:00:00Z',
      updatedAt: '2025-10-15T09:00:00Z',
    },
  ];

  findAll(status?: string): Aircraft[] {
    if (status) {
      return this.aircraft.filter((a) => a.status === status);
    }
    return this.aircraft;
  }

  findOne(id: string): Aircraft {
    const aircraft = this.aircraft.find((a) => a.id === id);
    if (!aircraft) {
      throw new NotFoundException(`Aircraft with ID ${id} not found`);
    }
    return aircraft;
  }

  create(dto: CreateAircraftDto): Aircraft {
    const now = new Date().toISOString();
    const sixMonthsLater = new Date();
    sixMonthsLater.setMonth(sixMonthsLater.getMonth() + 6);

    const aircraft: Aircraft = {
      id: uuidv4(),
      registration: dto.registration,
      model: dto.model,
      manufacturer: dto.manufacturer,
      yearOfManufacture: dto.yearOfManufacture,
      totalFlightHours: dto.totalFlightHours,
      status: dto.status || AircraftStatus.ACTIVE,
      lastMaintenanceDate: now.split('T')[0],
      nextMaintenanceDue: sixMonthsLater.toISOString().split('T')[0],
      createdAt: now,
      updatedAt: now,
    };

    this.aircraft.push(aircraft);
    return aircraft;
  }

  update(id: string, dto: UpdateAircraftDto): Aircraft {
    const index = this.aircraft.findIndex((a) => a.id === id);
    if (index === -1) {
      throw new NotFoundException(`Aircraft with ID ${id} not found`);
    }

    this.aircraft[index] = {
      ...this.aircraft[index],
      ...dto,
      updatedAt: new Date().toISOString(),
    };

    return this.aircraft[index];
  }

  remove(id: string): { deleted: boolean } {
    const index = this.aircraft.findIndex((a) => a.id === id);
    if (index === -1) {
      throw new NotFoundException(`Aircraft with ID ${id} not found`);
    }
    this.aircraft.splice(index, 1);
    return { deleted: true };
  }
}
