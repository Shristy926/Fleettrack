import React from 'react';
import { Menu, Bell, Search } from 'lucide-react';
import { alerts } from '../../data/mockData';

interface HeaderProps {
  setIsMobileOpen: (isOpen: boolean) => void;
  isSidebarCollapsed: boolean;
}

const Header: React.FC<HeaderProps> = ({ setIsMobileOpen, isSidebarCollapsed }) => {
  const unreadAlerts = alerts.filter(alert => !alert.read).length;

  return (
    <header className={`sticky top-0 z-30 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Hamburger (always visible for toggling) */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setIsMobileOpen(true)}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Title */}
          <div className="hidden lg:flex lg:items-center">
            <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
          </div>

          {/* Search - Expands when sidebar is collapsed */}
          <div className={`flex-1 px-4 lg:px-8 ${isSidebarCollapsed ? '' : 'lg:max-w-lg'}`}>
            <div className="relative mx-auto max-w-md lg:mx-0">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                className="block w-full rounded-md border-0 bg-white/90 py-2 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                placeholder="Search vehicles, trips, etc."
              />
            </div>
          </div>

          {/* Notifications */}
          <div className="flex items-center">
            <button
              type="button"
              className="relative rounded-full bg-white p-2 text-gray-500 hover:text-gray-600 hover:bg-gray-100"
            >
              <Bell className="h-5 w-5" aria-hidden="true" />
              {unreadAlerts > 0 && (
                <div className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center transform translate-x-1 -translate-y-1">
                  {unreadAlerts}
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;