import { BarChart } from 'lucide-react';
import React from 'react';
import { FaCar, FaStopwatch, FaPlay, FaExclamationTriangle, FaArrowUp, FaMapMarkerAlt, FaBan } from 'react-icons/fa';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  color?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value, color }) => {
  return (
    <div className="flex items-center bg-[#1e293b] text-white p-4 rounded shadow space-x-4 w-full">
      <div className={`text-2xl ${color ?? 'text-blue-400'}`}>{icon}</div>
      <div>
        <div className="text-sm text-gray-300">{label}</div>
        <div className="text-xl font-bold">{value}</div>
      </div>
    </div>
  );
};

const VehicleTracking: React.FC = () => {
  return (
    <div className="bg-[#0f172a] rounded-lg text-white w-full">
      <h2 className="text-2xl font-bold mb-6">VEHICLE TRACKING</h2>

      {/* Top Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        <StatCard icon={<FaCar />} label="Number of Vehicles" value={452} />
        <StatCard icon={<FaStopwatch />} label="Total Idle" value={124} />
        <StatCard icon={<FaPlay />} label="Total Running" value={328} />
        <StatCard icon={<FaExclamationTriangle />} label="Harsh Braking" value={15} color="text-yellow-400" />
        <StatCard icon={<FaArrowUp />} label="Harsh Acceleration" value={9} color="text-orange-400" />
        <StatCard icon={<FaMapMarkerAlt />} label="In Geofence" value={210} color="text-green-400" />
        <StatCard icon={<FaBan />} label="Out Geofence" value={79} color="text-red-500" />
      </div>

      {/* Bar Chart Section */}
      <div className="bg-[#1e293b] p-4 rounded shadow">
        <BarChart />
      </div>
    </div>
  );
};

export default VehicleTracking;
