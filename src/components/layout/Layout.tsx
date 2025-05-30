import React, { ReactNode, useState } from 'react';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';
import DashboardPage from '../../pages/DashboardPage';

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({children}) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
 

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(prev => !prev);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar
       
        isCollapsed={isSidebarCollapsed}
        onToggle={toggleSidebar}
      />

      {/* Main content adjusts based on sidebar width */}
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
          {children}
          {/* You can render children components here */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
