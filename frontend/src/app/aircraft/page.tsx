'use client';

import { useEffect, useState } from 'react';
import { AircraftCard } from '@/components/aircraft/AircraftCard';
import { aircraftService } from '@/services/aircraft.service';
import type { Aircraft } from '@/types/aircraft';

export default function AircraftPage() {
  const [aircraft, setAircraft] = useState<Aircraft[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    aircraftService
      .getAll(filter || undefined)
      .then(setAircraft)
      .finally(() => setLoading(false));
  }, [filter]);

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Fleet</h1>
          <p className="mt-1 text-gray-500">Manage your aircraft fleet</p>
        </div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        >
          <option value="">All statuses</option>
          <option value="active">Active</option>
          <option value="in_maintenance">In Maintenance</option>
          <option value="grounded">Grounded</option>
          <option value="retired">Retired</option>
        </select>
      </div>

      {loading ? (
        <div className="flex h-64 items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-500 border-t-transparent" />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {aircraft.map((a) => (
            <AircraftCard key={a.id} aircraft={a} />
          ))}
        </div>
      )}
    </div>
  );
}
