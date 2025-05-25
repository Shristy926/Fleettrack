import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {
  Truck,
  PauseCircle,
  Square,
  PowerOff,
  HelpCircle,
} from 'lucide-react';

ChartJS.register(ArcElement, Tooltip, Legend);

const FleetStatus = () => {
  const data = {
    labels: ['Running', 'Idle', 'Stopped', 'Inactive', 'No Data'],
    datasets: [
      {
        data: [85, 15, 50, 10, 40],
        backgroundColor: ['#4caf50', '#ffeb3b', '#f44336', '#2196f3', '#9e9e9e'],
        borderWidth: 1,
      },
    ],
  };

  const legends = [
    { label: 'Running', color: '#4caf50', icon: <Truck size={16} /> },
    { label: 'Idle', color: '#ffeb3b', icon: <PauseCircle size={16} /> },
    { label: 'Stopped', color: '#f44336', icon: <Square size={16} /> },
    { label: 'Inactive', color: '#2196f3', icon: <PowerOff size={16} /> },
    { label: 'No Data', color: '#9e9e9e', icon: <HelpCircle size={16} /> },
  ];

  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex items-center justify-between w-full max-w-md min-h-[350px]">

      <div className="w-1/2 flex flex-col items-center justify-center">
  {/* Chart with Title on Top */}
  <div className="flex flex-col items-center">
    <h2 className="text-base font-semibold mb-2">Fleet Status</h2>
    <div className="w-[100px] h-[100px]">
      <Doughnut
        data={data}
        options={{
          cutout: '70%',
          plugins: { legend: { display: false } },
          maintainAspectRatio: false,
        }}
      />
    </div>
  </div>

  {/* Count below chart */}
  <p className="text-center mt-2 text-xs font-bold">200 Objects</p>
</div>


      <div className="w-1/2 pl-4 space-y-2">
        {legends.map((item) => (
          <div key={item.label} className="flex items-center space-x-2 text-sm">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-gray-600 flex items-center gap-1">
              {item.icon}
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FleetStatus;
