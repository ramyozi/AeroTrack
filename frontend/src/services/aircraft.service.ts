import { api } from './api';
import type { Aircraft } from '@/types/aircraft';

export const aircraftService = {
  getAll: (status?: string): Promise<Aircraft[]> => {
    const params = status ? `?status=${status}` : '';
    return api.get<Aircraft[]>(`/aircraft${params}`);
  },

  getOne: (id: string): Promise<Aircraft> => {
    return api.get<Aircraft>(`/aircraft/${id}`);
  },

  create: (data: Partial<Aircraft>): Promise<Aircraft> => {
    return api.post<Aircraft>('/aircraft', data);
  },

  update: (id: string, data: Partial<Aircraft>): Promise<Aircraft> => {
    return api.put<Aircraft>(`/aircraft/${id}`, data);
  },

  delete: (id: string): Promise<void> => {
    return api.delete(`/aircraft/${id}`);
  },
};
