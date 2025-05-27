import { FC, ReactNode } from 'react';

export interface AlertCardProps {
  title: string;
  value: string;
  subText?: string;
  icon: ReactNode;
  bgColor: string;
  badgeColor: string;
  badgeText: string;
}

const AlertCard: FC<AlertCardProps> = ({
  title,
  value,
  subText,
  icon,
  bgColor,
  badgeColor,
  badgeText,
}) => {
  return (
    <div className={`p-4 rounded-xl shadow-md ${bgColor} w-48 flex-shrink-0 flex flex-col justify-between`}>
      <div>
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
        {subText && (
          <p className="text-xs text-red-700 mt-1 whitespace-pre-line">{subText}</p>
        )}
      </div>
      <div className="flex items-center justify-between mt-6">
        <div>
          <p className="text-2xl font-bold text-red-700">{value.split(' ')[0]}</p>
          <p className="text-xs text-gray-700">{value.split(' ')[1]}</p>
        </div>
        {icon}
      </div>
      <span className={`text-white text-xs mt-4 px-2 py-0.5 rounded ${badgeColor}`}>
        {badgeText}
      </span>
    </div>
  );
};

export default AlertCard;
