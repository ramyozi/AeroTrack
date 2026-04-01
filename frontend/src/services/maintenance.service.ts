import { api } from './api';
import type { MaintenanceRecord } from '@/types/maintenance';

export const maintenanceService = {
  getAll: (aircraftId?: string, status?: string): Promise<MaintenanceRecord[]> => {
    const params = new URLSearchParams();
    if (aircraftId) params.set('aircraftId', aircraftId);
    if (status) params.set('status', status);
    const query = params.toString();
    return api.get<MaintenanceRecord[]>(`/maintenance${query ? `?${query}` : ''}`);
  },

  getOne: (id: string): Promise<MaintenanceRecord> => {
    return api.get<MaintenanceRecord>(`/maintenance/${id}`);
  },

  create: (data: Partial<MaintenanceRecord>): Promise<MaintenanceRecord> => {
    return api.post<MaintenanceRecord>('/maintenance', data);
  },

  update: (id: string, data: Partial<MaintenanceRecord>): Promise<MaintenanceRecord> => {
    return api.put<MaintenanceRecord>(`/maintenance/${id}`, data);
  },

  getUpcoming: (aircraftId: string): Promise<MaintenanceRecord[]> => {
    return api.get<MaintenanceRecord[]>(`/maintenance/aircraft/${aircraftId}/upcoming`);
  },
};
