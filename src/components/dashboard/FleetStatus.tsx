import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const FleetStatus: React.FC = () => {
  const data = [
    { name: 'Running', value: 85, color: '#4CAF50' },
    { name: 'Idle', value: 15, color: '#FFEB3B' },
    { name: 'Stopped', value: 50, color: '#FF5722' },
    { name: 'Inactive', value: 10, color: '#2196F3' },
    { name: 'No Data', value: 40, color: '#9E9E9E' },
  ];

  return (
    <div className="bg-white rounded-xl p-1 shadow-md h-80px">
      <h2 className="text-lg font-semibold mb-4">Fleet Status</h2>
      <div className="flex items-center justify-between">
        <div className="relative w-50 h-50">
          <PieChart width={160} height={160}>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={70}
              paddingAngle={2}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-xl font-bold">200</p>
            <p className="text-sm text-gray-600">Objects</p>
          </div>
        </div>

        <div className="ml-4 space-y-2 text-sm">
          {data.map((item) => (
            <div key={item.name} className="flex items-center justify-between px-2 py-1 rounded bg-gray-100">
              <span className={`w-3 h-3 rounded-full mr-2`} style={{ backgroundColor: item.color }}></span>
              <span className="flex-1">{item.name}</span>
              <span className="font-bold">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FleetStatus;
