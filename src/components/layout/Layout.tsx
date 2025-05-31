import React, { useState } from 'react';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';
import { Outlet } from 'react-router-dom'; // <- Add this

const Layout: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const setIsMobileOpen: React.Dispatch<React.SetStateAction<boolean>> = useState(false)[1];


  const toggleSidebar = () => {
    setIsSidebarCollapsed(prev => !prev);
  };

  return (
    <div className="flex">
      <Sidebar isCollapsed={isSidebarCollapsed} onToggle={toggleSidebar} />
      <div
        className={`flex flex-col min-h-screen transition-all duration-300 w-full ${
          isSidebarCollapsed ? 'ml-20' : 'ml-64'
        }`}
      >
        <Header
          setIsMobileOpen={setIsMobileOpen}
          isSidebarCollapsed={isSidebarCollapsed}
        />
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
          <Outlet /> {/* This will render the nested route (e.g., DashboardPage) */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
