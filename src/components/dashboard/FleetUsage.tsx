import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
  Legend
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
  Legend
);

const FleetUsage = () => {
  const data = {
    labels: Array.from({ length: 17 }, (_, i) => `${i + 1}`),
    datasets: [
      {
        label: 'Distance (km)',
        data: [310, 330, 300, 290, 310, 300, 310, 280, 260, 200, 150, 120, 130, 170, 160, 140, 90],
        fill: true,
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: '#3b82f6',
        pointBackgroundColor: '#3b82f6',
        tension: 0.4,
        pointRadius: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: { size: 9 },
        },
        title: {
          display: true,
          text: 'Distance (km)',
          font: { size: 9 },
        },
      },
      x: {
        ticks: {
          font: { size: 9 },
        },
        title: {
          display: true,
          text: 'Hours',
          font: { size: 9 },
        },
      },
    },
  };

  return (
    <div className="bg-white p-2 rounded-xl shadow-md w-full max-w-md h-[350px]">
  <div className="flex justify-between items-start mb-2">
    <h2 className="text-sm font-semibold text-gray-800">Fleet Usage</h2>
    <div className="text-right text-[10px] text-gray-600 leading-tight">
      <p>Total Usage: <span className="text-blue-600 font-medium">25,800 km</span></p>
      <p>Avg/Vehicle: <span className="text-blue-600 font-medium">129 km</span></p>
    </div>
  </div>
  <div className="h-[180px]">
    <Line data={data} options={options} />
  </div>
</div>

  );
};

export default FleetUsage;
