import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Gauge,
  MapPin,
  Snowflake,
  Map,
  ThermometerSnowflake,
  MoveDiagonal,
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
    title: "Fence Overstay",
    subtitle: "Max Overstay 22 hrs",
    value: 46,
    unit: "Alerts",
    percentText: "10% vehicles",
    icon: <MapPin className="w-10 h-10 text-white opacity-40" />,
    bgColor: "bg-indigo-300",
  },
  {
    title: "AC Misuse",
    subtitle: "Approx Fuel Waste 22 ltr",
    value: 32,
    unit: "Hours",
    percentText: "10% vehicles",
    icon: <Snowflake className="w-10 h-10 text-white opacity-40" />,
    bgColor: "bg-cyan-300",
  },
  {
    title: "Stay Away from Zone",
    value: 25,
    unit: "Alerts",
    percentText: "10% vehicles",
    icon: <MoveDiagonal className="w-10 h-10 text-white opacity-40" />,
    bgColor: "bg-yellow-300",
  },
  {
    title: "Stay In Zone",
    value: 35,
    unit: "Alerts",
    percentText: "10% vehicles",
    icon: <Map className="w-10 h-10 text-white opacity-40" />,
    bgColor: "bg-green-300",
  },
  {
    title: "Temperature",
    subtitle: "Min Temp. 13°C\nMax Temp. 48°C",
    value: 35,
    unit: "Alerts",
    percentText: "10% vehicles",
    icon: <ThermometerSnowflake className="w-10 h-10 text-white opacity-40" />,
    bgColor: "bg-sky-300",
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
  <div className="flex flex-nowrap gap-1 min-w-fit">
    {cards.map((card, index) => (
      <div
        key={index}
        className={`relative p-5 rounded-xl shadow-md h-40 text-gray-900 ${card.bgColor}
          w-[180px] flex-shrink-0`}
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
