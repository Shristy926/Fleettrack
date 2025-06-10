import React from 'react';
import { Car, Battery, MapPin } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';
import Badge from '../ui/Badge';
import { Vehicle } from '../../types';

interface VehicleStatusCardProps {
  vehicle: Vehicle;
  onClick?: () => void;
}

const VehicleStatusCard: React.FC<VehicleStatusCardProps> = ({ vehicle, onClick }) => {
  // Format the last updated time
  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins === 1) return '1 minute ago';
    if (diffMins < 60) return `${diffMins} minutes ago`;
    
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours === 1) return '1 hour ago';
    if (diffHours < 24) return `${diffHours} hours ago`;
    
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays === 1) return '1 day ago';
    return `${diffDays} days ago`;
  };

  // Get appropriate status badge variant
  const getStatusBadgeVariant = (status: Vehicle['status']) => {
    switch (status) {
      case 'active': return 'success';
      case 'inactive': return 'neutral';
      case 'maintenance': return 'warning';
      default: return 'neutral';
    }
  };

  // Get appropriate fuel level color
  const getFuelLevelColor = (level: number) => {
    if (level <= 20) return 'text-red-600';
    if (level <= 40) return 'text-amber-600';
    return 'text-green-600';
  };

  return (
    <Card 
      className="h-full transition-all duration-300 hover:shadow-md"
      hover={true}
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-semibold text-gray-900">{vehicle.name}</h3>
            <p className="text-sm text-gray-500">{vehicle.model}</p>
          </div>
          <Badge variant={getStatusBadgeVariant(vehicle.status)}>
            {vehicle.status.charAt(0).toUpperCase() + vehicle.status.slice(1)}
          </Badge>
        </div>

        <div className="flex items-center text-sm mb-3">
          <Car className="h-4 w-4 mr-1.5 text-gray-500" />
          <span className="text-gray-900">{vehicle.licensePlate}</span>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 mb-1">Battery</span>
            <div className="flex items-center">
              <Battery className="h-4 w-4 mr-1 text-gray-500" />
              <span className={`text-sm font-medium ${getFuelLevelColor(vehicle.fuelLevel)}`}>
                {vehicle.fuelLevel}%
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 mb-1">Speed</span>
            <span className="text-sm font-medium text-gray-900">
              {vehicle.currentSpeed} mph
            </span>
          </div>
        </div>

        <div className="flex items-center text-xs text-gray-500 mt-2">
          <MapPin className="h-3 w-3 mr-1" />
          <span>Updated {getTimeAgo(vehicle.lastUpdated)}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleStatusCard;