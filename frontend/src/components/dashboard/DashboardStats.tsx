'use client';

import { useEffect, useState } from 'react';
import { Plane, Wrench, AlertTriangle, CheckCircle } from 'lucide-react';
import { aircraftService } from '@/services/aircraft.service';
import { maintenanceService } from '@/services/maintenance.service';
import type { Aircraft } from '@/types/aircraft';
import type { MaintenanceRecord } from '@/types/maintenance';

interface StatCardProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}

function StatCard({ label, value, icon, color }: StatCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${color}`}>
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
}

export function DashboardStats() {
  const [aircraft, setAircraft] = useState<Aircraft[]>([]);
  const [maintenance, setMaintenance] = useState<MaintenanceRecord[]>([]);

  useEffect(() => {
    aircraftService.getAll().then(setAircraft);
    maintenanceService.getAll().then(setMaintenance);
  }, []);

  const activeCount = aircraft.filter((a) => a.status === 'active').length;
  const inMaintenanceCount = aircraft.filter((a) => a.status === 'in_maintenance').length;
  const pendingMaintenance = maintenance.filter((m) => m.status === 'pending').length;
  const completedMaintenance = maintenance.filter((m) => m.status === 'completed').length;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard
        label="Active Aircraft"
        value={activeCount}
        icon={<Plane className="h-6 w-6 text-green-600" />}
        color="bg-green-50"
      />
      <StatCard
        label="In Maintenance"
        value={inMaintenanceCount}
        icon={<Wrench className="h-6 w-6 text-yellow-600" />}
        color="bg-yellow-50"
      />
      <StatCard
        label="Pending Tasks"
        value={pendingMaintenance}
        icon={<AlertTriangle className="h-6 w-6 text-orange-600" />}
        color="bg-orange-50"
      />
      <StatCard
        label="Completed"
        value={completedMaintenance}
        icon={<CheckCircle className="h-6 w-6 text-blue-600" />}
        color="bg-blue-50"
      />
    </div>
  );
}
