export interface Aircraft {
  id: string;
  registration: string;
  model: string;
  manufacturer: string;
  yearOfManufacture: number;
  totalFlightHours: number;
  status: 'active' | 'in_maintenance' | 'grounded' | 'retired';
  lastMaintenanceDate: string;
  nextMaintenanceDue: string;
  createdAt: string;
  updatedAt: string;
}
