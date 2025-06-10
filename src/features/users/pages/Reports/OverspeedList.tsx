import React, { useState } from 'react';

type OverspeedRecord = {
  id: number;
  vehicle: string;
  driver: string;
  speed: number;
  location: string;
  datetime: string;
  speedLimit: number;
};

const OverspeedList: React.FC = () => {
  const [filters, setFilters] = useState({
    vehicle: '',
    minSpeed: '',
    dateFrom: '',
    dateTo: '',
  });

  const data: OverspeedRecord[] = [
    {
      id: 1,
      vehicle: 'MH12AB1234',
      driver: 'John Doe',
      speed: 103,
      location: 'Pune',
      datetime: '2025-05-22T14:30',
      speedLimit: 80,
    },
    {
      id: 2,
      vehicle: 'DL01CD5678',
      driver: 'Jane Smith',
      speed: 95,
      location: 'Delhi',
      datetime: '2025-05-20T10:15',
      speedLimit: 80,
    },
  ];

  const filteredData = data.filter((row) => {
    const matchVehicle = filters.vehicle
      ? row.vehicle.toLowerCase().includes(filters.vehicle.toLowerCase())
      : true;
    const matchSpeed = filters.minSpeed
      ? row.speed >= Number(filters.minSpeed)
      : true;
    const matchDateFrom = filters.dateFrom
      ? new Date(row.datetime) >= new Date(filters.dateFrom)
      : true;
    const matchDateTo = filters.dateTo
      ? new Date(row.datetime) <= new Date(filters.dateTo)
      : true;

    return matchVehicle && matchSpeed && matchDateFrom && matchDateTo;
  });

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">🚗 Overspeed Alerts</h2>

      {/* 🔍 Filter Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <input
          type="text"
          placeholder="Vehicle Number"
          className="border px-3 py-2 rounded-md"
          value={filters.vehicle}
          onChange={(e) => setFilters({ ...filters, vehicle: e.target.value })}
        />
        <input
          type="number"
          placeholder="Min Speed (km/h)"
          className="border px-3 py-2 rounded-md"
          value={filters.minSpeed}
          onChange={(e) => setFilters({ ...filters, minSpeed: e.target.value })}
        />
        <div className="flex space-x-2">
          <input
            type="date"
            className="w-1/2 border px-3 py-2 rounded-md"
            value={filters.dateFrom}
            onChange={(e) => setFilters({ ...filters, dateFrom: e.target.value })}
          />
          <input
            type="date"
            className="w-1/2 border px-3 py-2 rounded-md"
            value={filters.dateTo}
            onChange={(e) => setFilters({ ...filters, dateTo: e.target.value })}
          />
        </div>
      </div>

      {/* 📋 Overspeed Table */}
      <div className="overflow-x-auto border rounded-md">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Vehicle</th>
              <th className="px-4 py-2">Driver</th>
              <th className="px-4 py-2">Speed</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Date & Time</th>
              <th className="px-4 py-2">Speed Limit</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={item.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{item.vehicle}</td>
                  <td className="px-4 py-2">{item.driver}</td>
                  <td className="px-4 py-2 text-red-600 font-bold">{item.speed} km/h</td>
                  <td className="px-4 py-2">{item.location}</td>
                  <td className="px-4 py-2">{new Date(item.datetime).toLocaleString()}</td>
                  <td className="px-4 py-2">{item.speedLimit} km/h</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center px-4 py-6 text-gray-500">
                  No overspeed records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OverspeedList;
