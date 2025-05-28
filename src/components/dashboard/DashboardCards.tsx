import { FC } from 'react';
import {
  Gauge,
  MapPin,
  Snowflake,
  Route,
  Thermometer,
  MoveRight,
} from 'lucide-react';

const DashboardCards: FC = () => {
  const cards = [
    {
      title: 'Overspeed',
      subtitle: 'Max Speed 103km/h',
      value: '22',
      unit: 'Alerts',
      percentage: '20% vehicles',
      bgColor: 'bg-red-200',
      badgeColor: 'bg-red-600',
      icon: <Gauge className="w-8 h-8 opacity-30" />,
    },
    {
      title: 'Fence Overstay',
      subtitle: 'Max Overstay 22 hrs',
      value: '46',
      unit: 'Alerts',
      percentage: '10% vehicles',
      bgColor: 'bg-indigo-200',
      badgeColor: 'bg-indigo-600',
      icon: <MapPin className="w-8 h-8 opacity-30" />,
    },
    {
      title: 'AC Misuse',
      subtitle: 'Approx Fuel Waste 22 ltr',
      value: '32',
      unit: 'Hours',
      percentage: '10% vehicles',
      bgColor: 'bg-cyan-200',
      badgeColor: 'bg-cyan-600',
      icon: <Snowflake className="w-8 h-8 opacity-30" />,
    },
    {
      title: 'Stay Away from Zone',
      subtitle: '',
      value: '25',
      unit: 'Alerts',
      percentage: '10% vehicles',
      bgColor: 'bg-yellow-200',
      badgeColor: 'bg-yellow-600',
      icon: <Route className="w-8 h-8 opacity-30" />,
    },
    {
      title: 'Stay In Zone',
      subtitle: '',
      value: '35',
      unit: 'Alerts',
      percentage: '10% vehicles',
      bgColor: 'bg-green-200',
      badgeColor: 'bg-green-600',
      icon: <Route className="w-8 h-8 opacity-30" />,
    },
    {
      title: 'Temperature',
      subtitle: 'Min Temp. 13°C | Max Temp. 48°C',
      value: '35',
      unit: 'Alerts',
      percentage: '10% vehicles',
      bgColor: 'bg-sky-200',
      badgeColor: 'bg-sky-600',
      icon: <Thermometer className="w-8 h-8 opacity-30" />,
    },
  ];

  return (
    <div className="w-full px-4 py-4">
      <div className="flex flex-nowrap gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`min-w-[200px] rounded-xl p-4 shadow-md relative text-gray-800 ${card.bgColor}`}
          >
            <div className="flex justify-between items-start">
              <h3 className="text-md font-semibold">{card.title}</h3>
              <div className="cursor-pointer">
                <MoveRight className="w-4 h-4 text-gray-600 opacity-50" />
              </div>
            </div>

            {card.subtitle && (
              <p className="text-xs mt-1 text-red-700 font-semibold">
                {card.subtitle}
              </p>
            )}

            <div className="text-3xl font-bold mt-2 text-red-800">
              {card.value}{' '}
              <span className="text-sm font-medium text-gray-800">
                {card.unit}
              </span>
            </div>

            <div className="absolute bottom-4 left-4">{card.icon}</div>

            <div
              className={`absolute bottom-4 right-4 text-white text-[10px] px-2 py-1 rounded ${card.badgeColor}`}
            >
              {card.percentage}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCards;
