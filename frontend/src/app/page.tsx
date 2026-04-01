import { DashboardStats } from '@/components/dashboard/DashboardStats';
import { RecentMaintenance } from '@/components/dashboard/RecentMaintenance';

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-gray-500">Fleet maintenance overview</p>
      </div>
      <DashboardStats />
      <div className="mt-8">
        <RecentMaintenance />
      </div>
    </div>
  );
}
