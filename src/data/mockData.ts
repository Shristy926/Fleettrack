import { Vehicle, TripHistory, Alert, User } from '../types';

export const currentUser: User = {
  id: 'user-1',
  name: 'Alex Morgan',
  email: 'alex@example.com',
  role: 'admin',
  avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
};

export const vehicles: Vehicle[] = [
  {
    id: 'v-1',
    name: 'Fleet SUV 1',
    model: 'Tesla Model Y',
    licensePlate: 'EV-1234',
    status: 'active',
    fuelLevel: 78,
    currentSpeed: 65,
    location: {
      lat: 37.7749,
      lng: -122.4194
    },
    lastUpdated: new Date(Date.now() - 120000).toISOString()
  },
  {
    id: 'v-2',
    name: 'Delivery Van 2',
    model: 'Ford Transit Electric',
    licensePlate: 'VAN-5678',
    status: 'active',
    fuelLevel: 45,
    currentSpeed: 0,
    location: {
      lat: 37.7833,
      lng: -122.4167
    },
    lastUpdated: new Date(Date.now() - 300000).toISOString()
  },
  {
    id: 'v-3',
    name: 'Executive Car',
    model: 'BMW i7',
    licensePlate: 'EXEC-9012',
    status: 'inactive',
    fuelLevel: 92,
    currentSpeed: 0,
    location: {
      lat: 37.7695,
      lng: -122.4143
    },
    lastUpdated: new Date(Date.now() - 1800000).toISOString()
  },
  {
    id: 'v-4',
    name: 'Service Truck',
    model: 'Rivian R1T',
    licensePlate: 'SVC-3456',
    status: 'maintenance',
    fuelLevel: 23,
    currentSpeed: 0,
    location: {
      lat: 37.7900,
      lng: -122.4100
    },
    lastUpdated: new Date(Date.now() - 86400000).toISOString()
  }
];

export const trips: TripHistory[] = [
  {
    id: 't-1',
    vehicleId: 'v-1',
    startTime: '2023-10-15T08:30:00Z',
    endTime: '2023-10-15T09:15:00Z',
    startLocation: {
      lat: 37.7749,
      lng: -122.4194,
      address: '123 Market St, San Francisco, CA'
    },
    endLocation: {
      lat: 37.7833,
      lng: -122.4167,
      address: '456 Mission St, San Francisco, CA'
    },
    distance: 8.5,
    duration: 45,
    averageSpeed: 55,
    route: [
      { lat: 37.7749, lng: -122.4194, timestamp: '2023-10-15T08:30:00Z' },
      { lat: 37.7780, lng: -122.4180, timestamp: '2023-10-15T08:40:00Z' },
      { lat: 37.7810, lng: -122.4170, timestamp: '2023-10-15T08:55:00Z' },
      { lat: 37.7833, lng: -122.4167, timestamp: '2023-10-15T09:15:00Z' }
    ]
  },
  {
    id: 't-2',
    vehicleId: 'v-2',
    startTime: '2023-10-14T14:00:00Z',
    endTime: '2023-10-14T16:30:00Z',
    startLocation: {
      lat: 37.7833,
      lng: -122.4167,
      address: '456 Mission St, San Francisco, CA'
    },
    endLocation: {
      lat: 37.3382,
      lng: -121.8863,
      address: '789 Main St, San Jose, CA'
    },
    distance: 82.3,
    duration: 150,
    averageSpeed: 65,
    route: [
      { lat: 37.7833, lng: -122.4167, timestamp: '2023-10-14T14:00:00Z' },
      { lat: 37.5630, lng: -122.3255, timestamp: '2023-10-14T14:45:00Z' },
      { lat: 37.4419, lng: -122.1430, timestamp: '2023-10-14T15:30:00Z' },
      { lat: 37.3382, lng: -121.8863, timestamp: '2023-10-14T16:30:00Z' }
    ]
  }
];

export const alerts: Alert[] = [
  {
    id: 'a-1',
    vehicleId: 'v-4',
    type: 'maintenance',
    severity: 'medium',
    message: 'Scheduled maintenance due in 3 days',
    timestamp: '2023-10-15T10:23:45Z',
    read: false
  },
  {
    id: 'a-2',
    vehicleId: 'v-2',
    type: 'battery',
    severity: 'high',
    message: 'Battery level below 20%, charging required',
    timestamp: '2023-10-15T14:12:30Z',
    read: true
  },
  {
    id: 'a-3',
    vehicleId: 'v-1',
    type: 'speed',
    severity: 'medium',
    message: 'Speed exceeds limit in current zone',
    timestamp: '2023-10-15T15:45:12Z',
    read: false
  },
  {
    id: 'a-4',
    vehicleId: 'v-3',
    type: 'security',
    severity: 'high',
    message: 'Unauthorized vehicle access detected',
    timestamp: '2023-10-14T23:17:42Z',
    read: false
  }
];