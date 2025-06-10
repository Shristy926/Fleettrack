import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './features/users/pages/LoginPage';
import { Layout, User } from 'lucide-react';
import DashboardPage from './features/users/pages/DashboardPage';
import VehicleTracking from './features/users/pages/VehicleTracking';
import OverspeedList from './features/users/pages/Reports/OverspeedList';
import UserManagement from './features/users/pages/UserManagement';
import RoleOperation from './features/users/RoleOperation';
import AddUser from './features/users/AddUser';
import EditUser from './features/users/EditUser';
import VehicleManagement from './features/users/pages/VehicleManagement';


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
