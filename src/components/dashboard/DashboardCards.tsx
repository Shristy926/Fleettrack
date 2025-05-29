import React, { useState } from "react";
import {
  Gauge,
  MapPin,
  Snowflake,
  Map,
  ThermometerSnowflake,
  Menu,
  List,
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
    percentText: "19% vehicles",
    icon: <MapPin className="w-10 h-10 text-white opacity-40" />,
    bgColor: "bg-blue-300",
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
    icon: <Map className="w-10 h-10 text-white opacity-40" />,
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
    percentText: "19% vehicles",
    icon: <ThermometerSnowflake className="w-10 h-10 text-white opacity-40" />,
    bgColor: "bg-sky-300",
  },
];

const DashboardCards: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="w-full px-2 py-2">
      <div className="flex gap-4 min-w-max">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative p-4 rounded-xl shadow-md h-52 w-[220px] shrink-0 text-gray-900 ${card.bgColor}`}
          >
            {/* Hamburger icon only on Overspeed */}
            {card.title === "Overspeed" && (
              <div
                className="absolute top-2 right-2 z-10 cursor-pointer"
                onClick={toggleDropdown}
              >
                <Menu className="w-5 h-5 text-white opacity-70" />
              </div>
            )}

            {/* Dropdown */}
            {card.title === "Overspeed" && dropdownOpen && (
              <div className="absolute top-8 right-2 z-20 bg-white rounded shadow-md p-2 w-40 text-black">
                <button className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded">
                  List
                </button>
                <button className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded mt-1">
                  Map
                </button>
              </div>
            )}

            {/* Icon */}
            <div className="absolute bottom-4 left-4">{card.icon}</div>

            {/* Card Content */}
            <h3 className="text-md font-semibold">{card.title}</h3>

            {card.subtitle && (
              <p className="text-xs text-red-700 font-semibold whitespace-pre-line">
                {card.subtitle}
              </p>
            )}

            <div className="mt-2">
              <p className="text-3xl font-bold text-red-700">{card.value}</p>
              <p className="text-sm font-medium">{card.unit}</p>
            </div>

            {/* Percent Info */}
            <div className="absolute bottom-2 right-2 text-[10px] font-semibold bg-white/30 text-white px-2 py-1 rounded">
              {card.percentText}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCards;
