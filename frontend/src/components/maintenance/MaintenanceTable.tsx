import type { MaintenanceRecord } from '@/types/maintenance';

const statusConfig: Record<string, { label: string; color: string }> = {
  pending: { label: 'Pending', color: 'bg-yellow-100 text-yellow-700' },
  in_progress: { label: 'In Progress', color: 'bg-blue-100 text-blue-700' },
  completed: { label: 'Completed', color: 'bg-green-100 text-green-700' },
  cancelled: { label: 'Cancelled', color: 'bg-gray-100 text-gray-700' },
};

const priorityConfig: Record<string, { label: string; color: string }> = {
  low: { label: 'Low', color: 'text-gray-500' },
  medium: { label: 'Medium', color: 'text-yellow-600' },
  high: { label: 'High', color: 'text-orange-600' },
  critical: { label: 'Critical', color: 'text-red-600' },
};

interface MaintenanceTableProps {
  records: MaintenanceRecord[];
}

export function MaintenanceTable({ records }: MaintenanceTableProps) {
  if (records.length === 0) {
    return (
      <div className="flex h-48 items-center justify-center rounded-xl border border-gray-200 bg-white">
        <p className="text-gray-400">No maintenance records found</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">Priority</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">Scheduled</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">Technician</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {records.map((record) => {
            const status = statusConfig[record.status] || statusConfig.pending;
            const priority = priorityConfig[record.priority] || priorityConfig.medium;
            return (
              <tr key={record.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <p className="text-sm font-medium text-gray-900">{record.description}</p>
                  <p className="text-xs text-gray-400">Aircraft #{record.aircraftId}</p>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm capitalize text-gray-600">{record.type}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-sm font-medium ${priority.color}`}>{priority.label}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${status.color}`}>
                    {status.label}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{record.scheduledDate}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{record.technician}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
