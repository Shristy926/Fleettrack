import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layout & Pages
import Layout from './components/layout/Layout';
import DashboardPage from './pages/DashboardPage';
import VehicleTracking from './pages/VehicleTracking';
import OverspeedList from './pages/Reports/OverspeedList';
import LoginPage from './pages/LoginPage';

// User Management
import UserManagement from './pages/UserManagement';
import RoleOperation from './components/Users/RoleOperation';
import User from './components/Users/User';
import AddUser from './components/Users/AddUser';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="tracking" element={<VehicleTracking />} />
          <Route path="overspeedList" element={<OverspeedList />} />

          {/* Nested User Management Routes */}
        <Route path="user-management">
          <Route index element={<UserManagement />} />
          <Route path="role-operation" element={<RoleOperation />} />
          <Route path="user" element={<User />} />
          <Route path="add-user" element={<AddUser />} />
          
 {/* ✅ Fixed */}
        </Route>


          {/* Placeholder Route */}
          <Route
            path="settings"
            element={<div className="p-8 text-center">Settings (Coming Soon)</div>}
          />
        </Route>

        // {/* Catch-all */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
