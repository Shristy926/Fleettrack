// src/components/dashboard/AlertCard.tsx
import React from "react";
import { LucideIcon } from "lucide-react";

interface AlertCardProps {
  title: string;
  subtitle: string;
  value: string;
  unit: string;
  vehiclePercent: string;
  icon: React.ReactNode;
  bgColor: string;
  vehicleBg: string;
}

const AlertList: React.FC<AlertCardProps> = ({
  title,
  subtitle,
  value,
  unit,
  vehiclePercent,
  icon,
  bgColor,
  vehicleBg,
}) => {
  return (
    <div className={`w-48 rounded-xl p-4 shadow-md text-white ${bgColor}`}>
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-sm font-semibold">{title}</h2>
        <div className="text-white/50">{icon}</div>
      </div>
      <p className="text-xs text-red-100">{subtitle}</p>
      <div className="text-2xl font-bold text-red-600 mt-1">
        {value} <span className="text-base">{unit}</span>
      </div>
      <div className={`mt-2 text-[10px] px-2 py-1 rounded-full inline-block ${vehicleBg}`}>
        {vehiclePercent} vehicles
      </div>
    </div>
  );
};

export default AlertList;
