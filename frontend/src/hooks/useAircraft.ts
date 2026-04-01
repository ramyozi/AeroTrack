'use client';

import { useEffect, useState } from 'react';
import { aircraftService } from '@/services/aircraft.service';
import type { Aircraft } from '@/types/aircraft';

export function useAircraft(status?: string) {
  const [aircraft, setAircraft] = useState<Aircraft[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    aircraftService
      .getAll(status)
      .then(setAircraft)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [status]);

  return { aircraft, loading, error };
}
