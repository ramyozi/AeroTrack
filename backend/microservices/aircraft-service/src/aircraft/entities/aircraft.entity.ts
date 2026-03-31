export enum AircraftStatus {
  ACTIVE = 'active',
  IN_MAINTENANCE = 'in_maintenance',
  GROUNDED = 'grounded',
  RETIRED = 'retired',
}

export interface Aircraft {
  id: string;
  registration: string;
  model: string;
  manufacturer: string;
  yearOfManufacture: number;
  totalFlightHours: number;
  status: AircraftStatus;
  lastMaintenanceDate: string;
  nextMaintenanceDue: string;
  createdAt: string;
  updatedAt: string;
}
