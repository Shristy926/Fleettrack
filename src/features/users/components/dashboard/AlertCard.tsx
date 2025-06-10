// components/AlertCard.tsx
import React from 'react';

interface AlertCardProps {
  title: string;
  subtitle: string;
  value: string;
  unit: string;
  color: string;
  footer: string;
  icon: React.ReactNode;
}

const AlertCard: React.FC<AlertCardProps> = ({
  title,
  subtitle,
  value,
  unit,
  color,
  footer,
  icon,
}) => {
  return (
    <div className={`rounded-xl shadow-md p-4 text-white w-full ${color}`}>
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="text-2xl">{icon}</div>
      </div>
      {subtitle && <p className="text-sm mt-1">{subtitle}</p>}
      <h2 className="text-3xl font-bold mt-2">
        {value} <span className="text-base font-medium">{unit}</span>
      </h2>
      <div className="text-xs mt-4 bg-white/20 px-2 py-1 rounded w-fit">{footer}</div>
    </div>
  );
};

export default AlertCard;
