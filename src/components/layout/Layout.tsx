import React, { useState } from 'react';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';
import DashboardPage from '../../pages/DashboardPage';

const Layout: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeRoute, setActiveRoute] = useState('dashboard');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(prev => !prev);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar
        activeRoute={activeRoute}
        setActiveRoute={setActiveRoute}
        isCollapsed={isSidebarCollapsed}
        onToggle={toggleSidebar}
      />

      {/* Main content adjusts based on sidebar width */}
      <div
        className={`flex flex-col min-h-screen transition-all duration-300 ${
          isSidebarCollapsed ? 'ml-20' : 'ml-64'
        }`}
      >
        <Header
          setIsMobileOpen={setIsMobileOpen}
          isSidebarCollapsed={isSidebarCollapsed}
        />
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
          <DashboardPage />
        </main>
      </div>
    </div>
  );
};

export default Layout;
