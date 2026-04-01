'use client';

import { useEffect, useState } from 'react';
import { maintenanceService } from '@/services/maintenance.service';
import type { MaintenanceRecord } from '@/types/maintenance';

export function useMaintenance(aircraftId?: string, status?: string) {
  const [records, setRecords] = useState<MaintenanceRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    maintenanceService
      .getAll(aircraftId, status)
      .then(setRecords)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [aircraftId, status]);

  return { records, loading, error };
}
