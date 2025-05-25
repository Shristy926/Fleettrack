import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import DashboardPage from './pages/DashboardPage';
import VehicleTracking from './pages/VehicleTracking';
import TripsPage from './pages/TripsPage';
import AlertsPage from './pages/AlertsPage';
import LoginPage from './pages/LoginPage';

function App() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false); // 👈 NEW

  if (!isAuthenticated) {
    return <LoginPage onLogin={() => setIsAuthenticated(true)} />;
  }

  const renderPage = () => {
    switch (activeRoute) {
      case 'dashboard':
        return <DashboardPage />;
      case 'tracking':
        return <VehicleTracking />;
      case 'trips':
        return <TripsPage />;
      case 'alerts':
        return <AlertsPage />;
      case 'settings':
        return (
          <div className="p-8 text-center">
            Settings page (not implemented in demo)
          </div>
        );
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar - Fixed */}
      <Sidebar
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        activeRoute={activeRoute}
        setActiveRoute={setActiveRoute}
        isCollapsed={isCollapsed} // 👈 Pass down
        setIsCollapsed={setIsCollapsed}
      />

      {/* Main content pushed right */}
      <div
  className={`min-h-screen bg-gray-50 transition-all duration-300 ${
    isCollapsed ? 'ml-20' : 'ml-64'
  }`}
>
  <Header setIsMobileOpen={setIsMobileOpen} />
  <main className="p-4">
    {renderPage()}
  </main>
 </div>
 </div>
  );
}


export default App;