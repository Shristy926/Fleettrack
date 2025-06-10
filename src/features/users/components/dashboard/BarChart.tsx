import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
//import { Bar } from 'recharts';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const BarChart: React.FC = () => {
  const data = {
    labels: ['Running', 'Idle', 'Stopped'],
    datasets: [
      {
        label: 'Status',
        data: [1000, 750, 450],
        backgroundColor: ['#4db6ac', '#facc15', '#ef4444'],
        borderRadius: 10, // Rounded bars
        barThickness: 24,
      },
    ],
  };

  const options = {
    indexAxis: 'y' as const, // Horizontal bar chart
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          color: '#cbd5e1', // Tailwind slate-300
          font: { size: 12 },
        },
        grid: {
          color: '#334155', // Tailwind slate-700
        },
      },
      y: {
        ticks: {
          color: '#cbd5e1',
          font: { size: 14 },
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="bg-[#1e293b] p-4 rounded-lg">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
