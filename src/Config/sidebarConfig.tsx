// src/config/sidebarConfig.ts
import { LayoutDashboard, Bell, Truck, Settings, WatchIcon } from 'lucide-react';

export interface SidebarItem {
  label: string;
  route: string;
  icon: React.ElementType;
}

export const sidebarItems: SidebarItem[] = [
  { label: 'Dashboard', route: 'dashboard', icon: LayoutDashboard },
  { label: 'Vehicle Tracking', route: 'VehicleTracking', icon: Truck },
  { label: 'Alerts', route: 'alerts', icon: Bell },
  { label: 'Trip History', route: 'triphistory', icon: WatchIcon },
  { label: 'Settings', route: 'settings', icon: Settings },
  ];

 