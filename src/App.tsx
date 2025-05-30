import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import your layout and pages
import Layout from './components/layout/Layout';
import DashboardPage from './pages/DashboardPage';
import VehicleTracking from './pages/VehicleTracking';
import OverspeedList from './pages/Reports/OverspeedList';
import LoginPage from './pages/LoginPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected (layout-wrapped) routes */}
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="tracking" element={<VehicleTracking />} />
          <Route path="overspeedList" element={<OverspeedList />} />
          <Route
            path="settings"
            element={<div className="p-8 text-center">Settings (Coming Soon)</div>}
          />
        </Route>

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
