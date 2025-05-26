import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { hour: 1, distance: 300 },
  { hour: 2, distance: 280 },
  { hour: 3, distance: 270 },
  { hour: 4, distance: 290 },
  { hour: 5, distance: 275 },
  { hour: 6, distance: 260 },
  { hour: 7, distance: 255 },
  { hour: 8, distance: 240 },
  { hour: 9, distance: 150 },
  { hour: 10, distance: 130 },
  { hour: 11, distance: 110 },
  { hour: 12, distance: 100 },
  { hour: 13, distance: 120 },
  { hour: 14, distance: 115 },
  { hour: 15, distance: 130 },
  { hour: 16, distance: 100 },
  { hour: 17, distance: 80 },
];

const FleetUsage: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-md text-sm">
      <h2 className="text-sm font-semibold mb-1">Fleet Usage</h2>

      <div className="flex justify-between text-xs text-gray-600 mb-2">
        <p>
          Total Fleet Usage{" "}
          <span className="text-blue-600 font-semibold">25800 km</span>
        </p>
        <p>
          Avg. Distance / Vehicle{" "}
          <span className="text-blue-600 font-semibold">129 km</span>
        </p>
      </div>

      <div className="w-full h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="hour" label={{ value: "Hours", position: "insideBottom", offset: -5 }} />
            <YAxis label={{ value: "Distance (km)", angle: -90, position: "insideLeft", offset: 10 }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="distance"
              stroke="#007bff"
              strokeWidth={2}
              dot={{ fill: "white", stroke: "#007bff", strokeWidth: 2, r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FleetUsage;
