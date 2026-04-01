export interface MaintenanceRecord {
  id: string;
  aircraftId: string;
  type: 'scheduled' | 'unscheduled' | 'inspection' | 'overhaul';
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  scheduledDate: string;
  completedDate: string | null;
  estimatedDuration: number;
  technician: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
}
