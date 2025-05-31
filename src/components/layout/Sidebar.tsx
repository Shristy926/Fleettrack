import React, { useState } from 'react';
import { Menu, LogOut, MapPin } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { sidebarItems } from '../../config/sidebarConfig';
import { cn } from '../../utils/cn';
import UserManagement from '../../pages/UserManagement';

interface SidebarProps {
  showHamburger?: boolean;
  isCollapsed: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  showHamburger = true,
  isCollapsed,
  onToggle,
}) => {
  const location = useLocation();
  const path = location.pathname?.split('/')[1] || 'dashboard';
  const [activeRoute, setActiveRoute] = useState(path);
  const navigate = useNavigate();

  const handleMenuClick = (route: string) => {
    setActiveRoute(route);
    if (isCollapsed) onToggle();
    navigate(`/${route}`);
  };

  return (
    <aside
      className={`h-screen bg-white fixed top-0 left-0 z-20 shadow-md border-r border-gray-200 transition-all duration-300 flex flex-col justify-between overflow-auto ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div>
        <div className="flex items-center justify-between p-4 border-b border-gray-100 overflow-auto">
          <div className="flex items-center gap-2">
            {!isCollapsed && (
              <div className="bg-indigo-100 text-indigo-600 p-2 rounded-full">
                <MapPin size={20} />
              </div>
            )}
            {!isCollapsed && (
              <span className="text-xl font-bold text-indigo-600">FleetTrack</span>
            )}
          </div>
          {showHamburger && (
            <button className="text-gray-600" onClick={onToggle} aria-label="Toggle Sidebar">
              <Menu size={22} />
            </button>
          )}
        </div>

        <nav className="mt-4 px-2 flex flex-col gap-1">
  {sidebarItems.map(({ label, route, icon: Icon }) =>
    label === 'User Management' ? (
      <UserManagement key={route} isCollapsed={isCollapsed} />
    ) : (
      <button
        key={route}
        onClick={() => handleMenuClick(route)}
        className={cn(
          'flex items-center p-3 rounded-md text-sm font-medium transition-all',
          activeRoute === route
            ? 'bg-indigo-600 text-white'
            : 'text-gray-700 hover:bg-indigo-100',
          isCollapsed ? 'justify-center' : 'gap-3'
        )}
        title={isCollapsed ? label : undefined}
        aria-label={label}
      >
        <Icon size={20} />
        {!isCollapsed && <span>{label}</span>}
      </button>
    )
  )}
</nav>


      </div>
    </aside>
  );
};

export default Sidebar;