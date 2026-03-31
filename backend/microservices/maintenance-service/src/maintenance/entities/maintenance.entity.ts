export enum MaintenanceType {
  SCHEDULED = 'scheduled',
  UNSCHEDULED = 'unscheduled',
  INSPECTION = 'inspection',
  OVERHAUL = 'overhaul',
}

export enum MaintenanceStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

export enum MaintenancePriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical',
}

export interface MaintenanceRecord {
  id: string;
  aircraftId: string;
  type: MaintenanceType;
  status: MaintenanceStatus;
  priority: MaintenancePriority;
  description: string;
  scheduledDate: string;
  completedDate: string | null;
  estimatedDuration: number;
  technician: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
}
