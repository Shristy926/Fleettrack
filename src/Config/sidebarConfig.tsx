import { LayoutDashboard, Map, AlertTriangle, Truck } from 'lucide-react';

export const sidebarItems = [
  { label: 'Dashboard', route: 'dashboard', icon: LayoutDashboard },
  { label: 'Tracking', route: 'tracking', icon: Map },
  { label: 'Trips', route: 'trips', icon: Truck },
  { label: 'Alerts', route: 'alerts', icon: AlertTriangle },
];