'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Plane, Wrench, LayoutDashboard } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/aircraft', label: 'Fleet', icon: Plane },
  { href: '/maintenance', label: 'Maintenance', icon: Wrench },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-64 flex-col border-r border-gray-200 bg-white">
      <div className="flex h-16 items-center gap-2 border-b border-gray-200 px-6">
        <Plane className="h-7 w-7 text-primary-600" />
        <span className="text-xl font-bold text-gray-900">AeroTrack</span>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="border-t border-gray-200 p-4">
        <p className="text-xs text-gray-400">AeroTrack v1.0.0</p>
      </div>
    </aside>
  );
}
