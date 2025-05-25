import React from 'react';
import { Calendar, Download, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { trips } from '../data/mockData';

const TripsPage: React.FC = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };
  
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit'
    });
  };
  
  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };
  
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Trip History</h1>
          <p className="mt-1 text-sm text-gray-500">
            View and analyze past trips from your fleet
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            iconLeft={<Calendar size={16} />}
          >
            Date Range
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconLeft={<Filter size={16} />}
          >
            Filters
          </Button>
          <Button
            variant="primary"
            size="sm"
            iconLeft={<Download size={16} />}
          >
            Export
          </Button>
        </div>
      </div>
      
      {/* Trips Table */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Recent Trips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">Date</th>
                  <th scope="col" className="px-6 py-3">Vehicle</th>
                  <th scope="col" className="px-6 py-3">Start Time</th>
                  <th scope="col" className="px-6 py-3">End Time</th>
                  <th scope="col" className="px-6 py-3">Duration</th>
                  <th scope="col" className="px-6 py-3">Distance</th>
                  <th scope="col" className="px-6 py-3">Avg. Speed</th>
                  <th scope="col" className="px-6 py-3">Start Location</th>
                  <th scope="col" className="px-6 py-3">End Location</th>
                </tr>
              </thead>
              <tbody>
                {trips.map((trip) => {
                  const vehicle = trips.find(t => t.vehicleId === trip.vehicleId);
                  return (
                    <tr key={trip.id} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-4">{formatDate(trip.startTime)}</td>
                      <td className="px-6 py-4">
                        {vehicle ? 'Vehicle-' + trip.vehicleId.split('-')[1] : trip.vehicleId}
                      </td>
                      <td className="px-6 py-4">{formatTime(trip.startTime)}</td>
                      <td className="px-6 py-4">{formatTime(trip.endTime)}</td>
                      <td className="px-6 py-4">{formatDuration(trip.duration)}</td>
                      <td className="px-6 py-4">{trip.distance} mi</td>
                      <td className="px-6 py-4">{trip.averageSpeed} mph</td>
                      <td className="px-6 py-4 max-w-[200px] truncate" title={trip.startLocation.address}>
                        {trip.startLocation.address}
                      </td>
                      <td className="px-6 py-4 max-w-[200px] truncate" title={trip.endLocation.address}>
                        {trip.endLocation.address}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TripsPage;