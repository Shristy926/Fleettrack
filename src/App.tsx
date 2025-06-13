import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Pages
import LoginPage from './features/users/pages/LoginPage';
import DashboardPage from './features/users/pages/DashboardPage';
import VehicleTracking from './features/users/pages/VehicleTracking';
import OverspeedList from './features/users/pages/Reports/OverspeedList';
import UserManagement from './features/users/pages/UserManagement';
import RoleOperation from './features/users/RoleOperation';
import AddUser from './features/users/AddUser';
import EditUser from './features/users/EditUser';
import VehicleManagement from './features/users/pages/VehicleManagement';
import User from "./features/users/User";
import Layout from './features/layout/Layout';
import ProtectedRoute from './features/auth/ProtectedRoute';
import VehicleList from './features/vehicle/VehicleList';
import VehicleForm from './features/vehicle/vehicleform';

const App: React.FC = () => {
  // For now, I'm simulating authentication. Later, you can replace this with real login state.
  const isAuthenticated = true; // 🔑 <-- Replace this with actual auth logic

  return (
    <BrowserRouter>
      <Routes>

        {/* Public Route */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes inside Layout */}
        <Route path="/" element={
  <ProtectedRoute isAuthenticated={isAuthenticated}>
    <Layout />
  </ProtectedRoute>
}>
  <Route index element={<Navigate to="dashboard" replace />} />
  <Route path="dashboard" element={<DashboardPage />} />
  <Route path="tracking" element={<VehicleTracking />} />
  <Route path="overspeedList" element={<OverspeedList />} />
  <Route path="user-management" element={<UserManagement />} />
  <Route path="user-management/role-operation" element={<RoleOperation />} />
  <Route path="user-management/user" element={<User />} />
  <Route path="user-management/add-user" element={<AddUser />} />
  <Route path="user-management/edit-user/:userId" element={<EditUser />} />
  <Route path="vehicle-management" element={<VehicleManagement />} />
  <Route path="vehicle-management/vehicle" element={<VehicleList />} />
  <Route path="vehicle-management/vehicle-form" element={<VehicleForm />} />
  <Route path="vehicle-management/trip" element={<div>Trip Form Coming Soon</div>} />
</Route>


        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/login" replace />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
