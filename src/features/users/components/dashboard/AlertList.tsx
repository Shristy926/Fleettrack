import React from 'react';
import { AlertCircle, AlertTriangle, Battery, Car, MapPin } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Alert } from '../../types';

interface AlertListProps {
  alerts: Alert[];
}

const AlertList: React.FC<AlertListProps> = ({ alerts }) => {
  const getAlertIcon = (type: Alert['type']) => {
    switch (type) {
      case 'maintenance':
        return <Car className="h-5 w-5 text-amber-500" />;
      case 'security':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'battery':
        return <Battery className="h-5 w-5 text-red-500" />;
      case 'speed':
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case 'geofence':
        return <MapPin className="h-5 w-5 text-blue-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />;
    }
  };

  const getAlertBgColor = (severity: Alert['severity'], read: boolean) => {
    if (read) return 'bg-white';
    
    switch (severity) {
      case 'high':
        return 'bg-red-50';
      case 'medium':
        return 'bg-amber-50';
      case 'low':
        return 'bg-blue-50';
      default:
        return 'bg-white';
    }
  };

  const formatAlertTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Recent Alerts</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ul className="divide-y divide-gray-100">
          {alerts.map((alert) => (
            <li
              key={alert.id}
              className={`flex p-4 gap-x-4 ${getAlertBgColor(alert.severity, alert.read)} transition-colors duration-200`}
            >
              <div className="flex-shrink-0 pt-0.5">
                {getAlertIcon(alert.type)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                <p className="mt-1 text-xs text-gray-500">
                  {formatAlertTime(alert.timestamp)}
                </p>
              </div>
              {!alert.read && (
                <div className="flex-shrink-0 self-center">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default AlertList;