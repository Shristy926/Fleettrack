import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layout & Pages
import Layout from './layout/Layout';
import DashboardPage from './pages/DashboardPage';
import VehicleTracking from './pages/VehicleTracking';
import OverspeedList from './pages/Reports/OverspeedList';
import LoginPage from './pages/LoginPage';

// User Management
import UserManagement from './pages/UserManagement';
import RoleOperation from './components/Users/RoleOperation';
import User from './components/Users/User';
import AddUser from './components/Users/AddUser';
import EditUser from './components/Users/EditUser';
import VehicleManagement from './pages/VehicleManagement';


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

  <Route path="user-management">
    <Route index element={<UserManagement />} />
    <Route path="role-operation" element={<RoleOperation />} />
    <Route path="user" element={<User />} />
    <Route path="add-user" element={<AddUser />} />
    <Route path="edit-user/:userId" element={<EditUser/>} />
  </Route>
  <Route path="vehicle-management">
    <Route index element={<VehicleManagement />} />
    // <Route path="vehicle" element={<div className="p-4">Vehicle Page</div>} />
    // <Route path="trip" element={<div className="p-4">Trip Page</div>} />
  </Route>
  <Route path="asset-management">
    <Route index element={<div>Select Asset Option</div>} />
    // <Route path="assets" element={<div className="p-4">Assets Page</div>} />
  </Route>

  <Route path="settings" element={<div className="p-8 text-center">Settings (Coming Soon)</div>} />
</Route>

<Route path="*" element={<Navigate to="/login" replace />} />

      </Routes>
    </Router>
  );
};

export default App;
