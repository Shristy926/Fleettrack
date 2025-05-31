import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { FaCalendarAlt, FaExclamationTriangle, FaGasPump, FaOilCan } from 'react-icons/fa';

const distanceData = [
  { name: 'Business', value: 600, color: '#00BCD4' },
  { name: 'Personal', value: 1300, color: '#FFEB3B' },
  { name: 'Unclassified', value: 600, color: '#F44336' },
  { name: 'Invalid', value: 500, color: '#9C27B0' },
];

const GroupCard = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {/* Maintenance Reminder */}
      <div className="bg-white p-4 rounded shadow w-full">
        <h3 className="text-sm font-semibold mb-2">Maintenance Reminder</h3>
        <div className="flex justify-between">
          <div className="text-center">
            <FaCalendarAlt className="text-blue-500 text-xl mx-auto" />
            <p className="text-xs">Due</p>
            <p className="text-blue-600 text-lg font-semibold">32</p>
          </div>
          <div className="text-center">
            <FaExclamationTriangle className="text-red-500 text-xl mx-auto" />
            <p className="text-xs">Overdue</p>
            <p className="text-red-600 text-lg font-semibold">25</p>
          </div>
        </div>
      </div>

      {/* Renewal Reminder */}
      <div className="bg-white p-4 rounded shadow w-full">
        <h3 className="text-sm font-semibold mb-2">Renewal Reminder</h3>
        <div className="flex justify-between">
          <div className="text-center">
            <FaCalendarAlt className="text-blue-500 text-xl mx-auto" />
            <p className="text-xs">Due</p>
            <p className="text-blue-600 text-lg font-semibold">32</p>
          </div>
          <div className="text-center">
            <FaExclamationTriangle className="text-red-500 text-xl mx-auto" />
            <p className="text-xs">Overdue</p>
            <p className="text-red-600 text-lg font-semibold">25</p>
          </div>
        </div>
      </div>

      {/* Distance Classification */}
      <div className="bg-white p-4 rounded shadow w-full">
        <h3 className="text-sm font-semibold mb-2">Distance Classification</h3>
        <div className="flex">
          <PieChart width={100} height={100}>
            <Pie
              data={distanceData}
              cx={50}
              cy={50}
              innerRadius={20}
              outerRadius={40}
              fill="#8884d8"
              paddingAngle={2}
              dataKey="value"
            >
              {distanceData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <text x={50} y={50} textAnchor="middle" dominantBaseline="middle" className="text-xs font-bold">
              3000 km
            </text>
          </PieChart>
          <div className="ml-4 text-sm space-y-1">
            {distanceData.map((item, idx) => (
              <div key={idx} className="flex justify-between w-full">
                <span className="text-gray-700" style={{ color: item.color }}>{item.name}</span>
                <span className="font-medium">{item.value} km</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fleet Fuel */}
      <div className="bg-white px-4 py-2 rounded shadow w-full min-w-[300px] max-h-[150px]">
        <h3 className="text-sm font-semibold mb-2">Fleet Fuel</h3>
        <div className="flex justify-between">
          <div className="text-center">
            <FaGasPump className="text-green-500 text-xl mx-auto" />
            <p className="text-xs">Total Fuel Refill</p>
            <p className="text-green-600 font-bold text-xl">1035 ltr</p>
            <p className="text-green-600 text-xs">(105 times)</p>
          </div>
          <div className="text-center">
            <FaOilCan className="text-red-400 text-xl mx-auto" />
            <p className="text-xs">Total Fuel Drain</p>
            <p className="text-red-500 font-bold text-xl">68 ltr</p>
            <p className="text-red-500 text-xs">(10 times)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
