import React, { useState } from "react";
import {
  Gauge,
  MapPin,
  Snowflake,
  Map,
  ThermometerSnowflake,
  Menu,
} from "lucide-react";

type AlertCard = {
  title: string;
  subtitle?: string;
  value: number | string;
  unit: string;
  percentText: string;
  icon?: React.ReactNode;
  bgColor: string;
  hasMenu?: boolean;  // <-- new property to toggle hamburger menu
};

const alerts: AlertCard[] = [
  {
    title: "Overspeed",
    subtitle: "Max Speed 103km/h",
    value: 22,
    unit: "Alerts",
    percentText: "20% vehicles",
    //icon: <Gauge className="w-10 h-10 text-white opacity-40" />,
    bgColor: "bg-red-200",
    hasMenu: true,  // hamburger menu shown here
  },
  {
    title: "Fence Overstay",
    subtitle: "Max Overstay 22 hrs",
    value: 46,
    unit: "Alerts",
    percentText: "19% vehicles",
    // icon: <MapPin className="w-10 h-10 text-white opacity-40" />,
    bgColor: "bg-blue-300",
    hasMenu: true,  // also show hamburger menu here dynamically
  },
  {
    title: "AC Misuse",
    subtitle: "Approx Fuel Waste 22 ltr",
    value: 32,
    unit: "Hours",
    percentText: "10% vehicles",
    //icon: <Snowflake className="w-10 h-10 text-white opacity-40" />,
    bgColor: "bg-cyan-300",
  },
  {
    title: "Stay Away from Zone",
    value: 25,
    unit: "Alerts",
    percentText: "10% vehicles",
    // icon: <Map className="w-10 h-10 text-white opacity-40" />,
    bgColor: "bg-yellow-300",
  },
  {
    title: "Stay In Zone",
    value: 35,
    unit: "Alerts",
    percentText: "10% vehicles",
    // icon: <Map className="w-10 h-10 text-white opacity-40" />,
    bgColor: "bg-green-300",
  },
  {
    title: "Temperature",
    subtitle: "Min Temp. 13°C\nMax Temp. 48°C",
    value: 35,
    unit: "Alerts",
    percentText: "19% vehicles",
    //icon: <ThermometerSnowflake className="w-10 h-10 text-white opacity-40" />,
    bgColor: "bg-sky-300",
  },
];

const AlertCardsGroup: React.FC = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex((current) => (current === index ? null : index));
  };

  const handleMapClick = (title: string) => {
    alert(`Navigate to ${title} Map page`);
    setOpenDropdownIndex(null); // close dropdown after click
  };

  const handleListClick = (title: string) => {
    alert(`Navigate to ${title} List page`);
    setOpenDropdownIndex(null); // close dropdown after click
  };

  return (
    <div>
    sachin
    </div>
  );
};

export default AlertCardsGroup;