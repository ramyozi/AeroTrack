import { Plane } from 'lucide-react';
import type { Aircraft } from '@/types/aircraft';

const statusConfig: Record<string, { label: string; color: string }> = {
  active: { label: 'Active', color: 'bg-green-100 text-green-700' },
  in_maintenance: { label: 'In Maintenance', color: 'bg-yellow-100 text-yellow-700' },
  grounded: { label: 'Grounded', color: 'bg-red-100 text-red-700' },
  retired: { label: 'Retired', color: 'bg-gray-100 text-gray-700' },
};

interface AircraftCardProps {
  aircraft: Aircraft;
}

export function AircraftCard({ aircraft }: AircraftCardProps) {
  const status = statusConfig[aircraft.status] || statusConfig.active;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50">
            <Plane className="h-5 w-5 text-primary-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{aircraft.registration}</h3>
            <p className="text-sm text-gray-500">{aircraft.manufacturer} {aircraft.model}</p>
          </div>
        </div>
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${status.color}`}>
          {status.label}
        </span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-gray-400">Flight Hours</p>
          <p className="text-sm font-medium text-gray-700">{aircraft.totalFlightHours.toLocaleString()}h</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">Year</p>
          <p className="text-sm font-medium text-gray-700">{aircraft.yearOfManufacture}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">Last Maintenance</p>
          <p className="text-sm font-medium text-gray-700">{aircraft.lastMaintenanceDate}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">Next Due</p>
          <p className="text-sm font-medium text-gray-700">{aircraft.nextMaintenanceDue}</p>
        </div>
      </div>
    </div>
  );
}
