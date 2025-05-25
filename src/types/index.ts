export interface Vehicle {
  id: string;
  name: string;
  model: string;
  licensePlate: string;
  status: 'active' | 'inactive' | 'maintenance';
  fuelLevel: number;
  currentSpeed: number;
  location: {
    lat: number;
    lng: number;
  };
  lastUpdated: string;
}

export interface TripHistory {
  id: string;
  vehicleId: string;
  startTime: string;
  endTime: string;
  startLocation: {
    lat: number;
    lng: number;
    address: string;
  };
  endLocation: {
    lat: number;
    lng: number;
    address: string;
  };
  distance: number;
  duration: number;
  averageSpeed: number;
  route: Array<{
    lat: number;
    lng: number;
    timestamp: string;
  }>;
}

export interface Alert {
  id: string;
  vehicleId: string;
  type: 'maintenance' | 'security' | 'battery' | 'speed' | 'geofence';
  severity: 'low' | 'medium' | 'high';
  message: string;
  timestamp: string;
  read: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'viewer';
  avatar: string;
}