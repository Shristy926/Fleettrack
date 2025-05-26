import React, { useState } from 'react';
import { BellOff, Filter, Clock } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { alerts } from '../../data/mockData';
import { Alert } from '../../types';

const AlertsPage: React.FC = () => {
  const [filter, setFilter] = useState<Alert['severity'] | 'all'>('all');
  
  const filteredAlerts = filter === 'all' 
    ? alerts 
    : alerts.filter(alert => alert.severity === filter);
  
  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  };
  
  const getAlertIcon = (type: Alert['type']) => {
    switch (type) {
      case 'maintenance':
        return <div className="p-2 rounded-lg bg-amber-100 text-amber-700">🔧</div>;
      case 'security':
        return <div className="p-2 rounded-lg bg-red-100 text-red-700">🔒</div>;
      case 'battery':
        return <div className="p-2 rounded-lg bg-red-100 text-red-700">🔋</div>;
      case 'speed':
        return <div className="p-2 rounded-lg bg-amber-100 text-amber-700">⚡</div>;
      case 'geofence':
        return <div className="p-2 rounded-lg bg-blue-100 text-blue-700">📍</div>;
      default:
        return <div className="p-2 rounded-lg bg-gray-100 text-gray-700">❓</div>;
    }
  };
  
  const getAlertTypeName = (type: Alert['type']) => {
    switch (type) {
      case 'maintenance': return 'Maintenance';
      case 'security': return 'Security';
      case 'battery': return 'Battery';
      case 'speed': return 'Speed';
      case 'geofence': return 'Geofence';
      default: return type;
    }
  };
  
  const getSeverityBadge = (severity: Alert['severity']) => {
    switch (severity) {
      case 'high':
        return <Badge variant="error">High</Badge>;
      case 'medium':
        return <Badge variant="warning">Medium</Badge>;
      case 'low':
        return <Badge variant="primary">Low</Badge>;
      default:
        return null;
    }
  };
  
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Alerts</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage and respond to system alerts and notifications
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            iconLeft={<Clock size={16} />}
          >
            Last 7 Days
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconLeft={<Filter size={16} />}
          >
            Filter
          </Button>
          <Button
            variant="primary"
            size="sm"
            iconLeft={<BellOff size={16} />}
          >
            Mark All Read
          </Button>
        </div>
      </div>
      
      {/* Severity Filter */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={filter === 'all' ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setFilter('all')}
        >
          All Alerts
        </Button>
        <Button
          variant={filter === 'high' ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setFilter('high')}
        >
          High Priority
        </Button>
        <Button
          variant={filter === 'medium' ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setFilter('medium')}
        >
          Medium Priority
        </Button>
        <Button
          variant={filter === 'low' ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setFilter('low')}
        >
          Low Priority
        </Button>
      </div>
      
      {/* Alerts List */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>
            {filter === 'all' ? 'All Alerts' : `${filter.charAt(0).toUpperCase() + filter.slice(1)} Priority Alerts`}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {filteredAlerts.length === 0 ? (
            <div className="py-8 text-center">
              <p className="text-gray-500">No alerts match your current filter.</p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-100">
              {filteredAlerts.map((alert) => (
                <li key={alert.id} className="py-4 flex items-start gap-x-6">
                  {getAlertIcon(alert.type)}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {getAlertTypeName(alert.type)} Alert
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {alert.message}
                        </p>
                      </div>
                      <div className="ml-4">
                        {getSeverityBadge(alert.severity)}
                      </div>
                    </div>
                    <div className="mt-2 flex items-center text-xs text-gray-500">
                      <span>{formatDate(alert.timestamp)}</span>
                      <span className="mx-2">•</span>
                      <span>Vehicle-{alert.vehicleId.split('-')[1]}</span>
                      {!alert.read && (
                        <>
                          <span className="mx-2">•</span>
                          <span className="font-medium text-blue-600">Unread</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div>
                    <Button variant="ghost" size="sm">
                      Dismiss
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AlertsPage;