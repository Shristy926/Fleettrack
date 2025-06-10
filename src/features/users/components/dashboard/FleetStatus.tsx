import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import {
  Truck,
  PauseCircle,
  Square,
  MicOff,
  HelpCircle,
} from "lucide-react";

const data = [
  { name: "Running", value: 90, color: "#22c55e", icon: <Truck size={16} /> },
  { name: "Idle", value: 10, color: "#facc15", icon: <PauseCircle size={16} /> },
  { name: "Stopped", value: 50, color: "#ef4444", icon: <Square size={16} /> },
  { name: "Inactive", value: 20, color: "#3b82f6", icon: <MicOff size={16} /> },
  { name: "No Data", value: 30, color: "#9ca3af", icon: <HelpCircle size={16} /> },
];

const totalObjects = 200;

const FleetStatus: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-md w-full max-w-md mx-auto p-6 flex flex-col">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4 text-left">
        Fleet Status
      </h2>

      {/* Donut + Legend side by side always */}
      <div className="flex flex-row gap-6 items-center justify-start">
        {/* Donut Chart */}
        <div className="w-[160px] h-[160px] flex-shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
  data={data}
  innerRadius={50}
  outerRadius={80}
  dataKey="value"
  startAngle={90}
  endAngle={-270}
>

                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend - locked next to the donut */}
        <div className="flex flex-col gap-2 text-sm text-left">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-2 text-gray-800">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              <span>{item.icon}</span>
              <span className={item.name === "Idle" ? "text-purple-600" : ""}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Total Objects */}
      <div className="mt-8 text-sm font-semibold text-gray-700 text-center">
        {totalObjects} Objects
      </div>
    </div>
  );
};

export default FleetStatus;
