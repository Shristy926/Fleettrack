import {
  LayoutDashboard,
  Map,
  AlertTriangle,
  Truck,
  User,
  ClipboardList,
  Car, // ✅ Use this for Vehicle Management
} from 'lucide-react';

export const sidebarItems = [
  { label: 'Dashboard', route: 'dashboard', icon: LayoutDashboard },
  { label: 'Tracking', route: 'tracking', icon: Map },
  { label: 'Trips', route: 'trips', icon: Truck },
  { label: 'Alerts', route: 'alerts', icon: AlertTriangle },
  { label: 'User Management', route: 'user-management', icon: User },
  { label: 'Asset Management', route: 'asset-management', icon: ClipboardList },
  { label: 'Vehicle Management', route: 'vehicle-management', icon: Car }, // ✅ FIXED
];
