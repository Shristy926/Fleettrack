// src/components/layout/DashboardLayout.tsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
  const [activeRoute, setActiveRoute] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
const handleToggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex">
      <Sidebar
  activeRoute={activeRoute}
  setActiveRoute={setActiveRoute}
  onToggle={handleToggleSidebar}
/>
      <main className="ml-64 w-full min-h-screen bg-gray-50 p-6">
        {children(activeRoute)}
      </main>
    </div>
  );
};

export default DashboardLayout;
