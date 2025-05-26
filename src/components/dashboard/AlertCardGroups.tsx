// src/components/dashboard/AlertCardsGroup.tsx
import React from "react";
import AlertCard from "./AlertCard";
import { Thermometer, MapPin, Snowflake, GaugeCircle } from "lucide-react"; // or use any icon lib

const AlertCardGroups: React.FC = () => {
  return (
    <div className="flex flex-row gap-4 overflow-x-auto p-4">
      <AlertCard
        title="Overspeed"
        subtitle="Max Speed 103km/h"
        value="22"
        unit="Alerts"
        vehiclePercent="20%"
        icon={<GaugeCircle size={20} />}
        bgColor="bg-red-300"
        vehicleBg="bg-red-500"
      />
      <AlertCard
        title="Fence Overstay"
        subtitle="Max Overstay 22 hrs"
        value="46"
        unit="Alerts"
        vehiclePercent="10%"
        icon={<MapPin size={20} />}
        bgColor="bg-blue-300"
        vehicleBg="bg-blue-500"
      />
      <AlertCard
        title="AC Misuse"
        subtitle="Approx Fuel Waste 22 ltr"
        value="32"
        unit="Hours"
        vehiclePercent="10%"
        icon={<Snowflake size={20} />}
        bgColor="bg-cyan-300"
        vehicleBg="bg-cyan-600"
      />
      <AlertCard
        title="Stay Away from Zone"
        subtitle=""
        value="25"
        unit="Alerts"
        vehiclePercent="10%"
        icon={<MapPin size={20} />}
        bgColor="bg-yellow-300"
        vehicleBg="bg-yellow-600"
      />
      <AlertCard
        title="Stay In Zone"
        subtitle=""
        value="35"
        unit="Alerts"
        vehiclePercent="10%"
        icon={<MapPin size={20} />}
        bgColor="bg-green-300"
        vehicleBg="bg-green-600"
      />
      <AlertCard
        title="Temperature"
        subtitle="Min Temp. 13°C | Max Temp. 48°C"
        value="35"
        unit="Alerts"
        vehiclePercent="10%"
        icon={<Thermometer size={20} />}
        bgColor="bg-sky-300"
        vehicleBg="bg-sky-600"
      />
    </div>
  );
};

export default AlertCardGroups;
