import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Gauge,
  MapPin,
  Snowflake,
  Map,
  ThermometerSnowflake,
  Menu,
} from "lucide-react";

type CardProps = {
  title: string;
  subtitle?: string;
  value: number | string;
  unit: string;
  percentText: string;
  icon: React.ReactNode;
  bgColor: string;
};

const cards: CardProps[] = [
  {
    title: "Overspeed",
    subtitle: "Max Speed 103km/h",
    value: 22,
    unit: "Alerts",
    percentText: "20% vehicles",
    icon: <Gauge className="w-10 h-10 text-white opacity-40" />,
    bgColor: "bg-red-300",
  },
  {
    title: "Idle",
    subtitle: "Max Duration 2h 15m",
    value: 14,
    unit: "Vehicles",
    percentText: "10% fleet",
    icon: <ThermometerSnowflake className="w-10 h-10 text-white opacity-40" />,
    bgColor: "bg-yellow-300",
  },
  {
    title: "Geofence",
    value: 8,
    unit: "Entries",
    percentText: "5% events",
    icon: <MapPin className="w-10 h-10 text-white opacity-40" />,
    bgColor: "bg-blue-300",
  },
  {
    title: "AC Usage",
    value: "6h 22m",
    unit: "Today",
    percentText: "AC On 50%",
    icon: <Snowflake className="w-10 h-10 text-white opacity-40" />,
    bgColor: "bg-cyan-300",
  },
  {
    title: "Trip Summary",
    value: 120,
    unit: "Trips",
    percentText: "40 vehicles",
    icon: <Map className="w-10 h-10 text-white opacity-40" />,
    bgColor: "bg-green-300",
  },
];

const DashboardCards: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleListClick = () => {
    navigate("/overspeedList");
    setDropdownOpen(false);
  };

  return (
    <div className="w-full px-4 py-4">
      <div className="flex flex-row justify-between flex-wrap gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative p-5 rounded-xl shadow-md h-60 w-[220px] text-gray-900 ${card.bgColor}`}
          >
            {card.title === "Overspeed" && (
              <div
                className="absolute top-2 right-2 z-10 cursor-pointer"
                onClick={toggleDropdown}
              >
                <Menu className="w-5 h-5 text-white opacity-70" />
              </div>
            )}

            {card.title === "Overspeed" && dropdownOpen && (
              <div className="absolute top-8 right-2 z-20 bg-white rounded shadow-md p-2 w-40 text-black">
                <button
                  className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
                  onClick={handleListClick}
                >
                  List
                </button>
                <button className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded mt-1">
                  Map
                </button>
              </div>
            )}

            <div className="absolute bottom-4 left-4">{card.icon}</div>

            <h3 className="text-lg font-semibold">{card.title}</h3>

            {card.subtitle && (
              <p className="text-sm text-red-700 font-medium whitespace-pre-line">
                {card.subtitle}
              </p>
            )}

            <div className="mt-4">
              <p className="text-4xl font-bold text-red-700">{card.value}</p>
              <p className="text-sm font-medium">{card.unit}</p>
            </div>

            <div className="absolute bottom-2 right-2 text-[11px] font-semibold bg-white/30 text-white px-2 py-1 rounded">
              {card.percentText}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCards;
