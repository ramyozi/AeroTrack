'use client';

import { useEffect, useState } from 'react';
import { maintenanceService } from '@/services/maintenance.service';
import { MaintenanceTable } from '@/components/maintenance/MaintenanceTable';
import type { MaintenanceRecord } from '@/types/maintenance';

export function RecentMaintenance() {
  const [records, setRecords] = useState<MaintenanceRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    maintenanceService
      .getAll()
      .then((data) => {
        const sorted = [...data].sort(
          (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
        );
        setRecords(sorted.slice(0, 5));
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold text-gray-900">Recent Maintenance Activity</h2>
      {loading ? (
        <div className="flex h-48 items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-500 border-t-transparent" />
        </div>
      ) : (
        <MaintenanceTable records={records} />
      )}
    </div>
  );
}
