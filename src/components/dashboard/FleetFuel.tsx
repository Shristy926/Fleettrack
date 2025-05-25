import React from "react";
import { FaCalendarAlt, FaBell, FaGasPump } from "react-icons/fa";
import { GiFuelTank } from "react-icons/gi";
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#00BFFF", "#FFC300", "#FF6384", "#9B59B6"];
const distanceData = [
  { name: "Business", value: 600 },
  { name: "Personal", value: 1300 },
  { name: "Unclassified", value: 600 },
  { name: "Invalid", value: 500 },
];

const FleetFuel: React.FC = () => {
  return (
    <div className="flex gap-4 flex-nowrap">
      {/* Card 1: Maintenance Reminder */}
      <div className="w-[180px] h-[160px] bg-white rounded-xl shadow p-4 flex flex-col justify-between">
        <h3 className="text-sm font-semibold">Maintenance Reminder</h3>
        <div className="flex justify-between text-center">
          <div>
            <FaCalendarAlt className="text-blue-500 text-xl mx-auto" />
            <p className="text-blue-600 text-xl font-bold">32</p>
            <p className="text-sm text-gray-500">Due</p>
          </div>
          <div>
            <FaBell className="text-red-500 text-xl mx-auto" />
            <p className="text-red-500 text-xl font-bold">25</p>
            <p className="text-sm text-gray-500">Overdue</p>
          </div>
        </div>
      </div>

      {/* Card 2: Renewal Reminder */}
      <div className="w-[180px] h-[160px] bg-white rounded-xl shadow p-4 flex flex-col justify-between">
        <h3 className="text-sm font-semibold">Renewal Reminder</h3>
        <div className="flex justify-between text-center">
          <div>
            <FaCalendarAlt className="text-blue-500 text-xl mx-auto" />
            <p className="text-blue-600 text-xl font-bold">32</p>
            <p className="text-sm text-gray-500">Due</p>
          </div>
          <div>
            <FaBell className="text-red-500 text-xl mx-auto" />
            <p className="text-red-500 text-xl font-bold">25</p>
            <p className="text-sm text-gray-500">Overdue</p>
          </div>
        </div>
      </div>

      {/* Card 3: Distance Classification */}
      <div className="w-[320px] h-[160px] bg-white rounded-xl shadow p-4">
        <h3 className="text-sm font-semibold mb-2">Distance Classification</h3>
        <div className="flex items-center justify-between">
          <PieChart width={80} height={80}>
            <Pie
              data={distanceData}
              cx="50%"
              cy="50%"
              innerRadius={25}
              outerRadius={40}
              fill="#8884d8"
              dataKey="value"
            >
              {distanceData.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
          <div className="text-sm ml-2 space-y-1">
            <div className="flex justify-between text-blue-500">
              <span>Business</span> <span>600 km</span>
            </div>
            <div className="flex justify-between text-yellow-500">
              <span>Personal</span> <span>1300 km</span>
            </div>
            <div className="flex justify-between text-pink-500">
              <span>Unclassified</span> <span>600 km</span>
            </div>
            <div className="flex justify-between text-purple-500">
              <span>Invalid</span> <span>500 km</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 4: Fleet Fuel */}
      <div className="w-[320px] h-[160px] bg-white rounded-xl shadow p-4">
        <h3 className="text-sm font-semibold mb-2">Fleet Fuel</h3>
        <div className="grid grid-cols-2 divide-x">
          <div className="text-center">
            <FaGasPump className="text-green-500 text-2xl mx-auto" />
            <div className="text-green-600 text-lg font-bold">
              1035 <span className="text-sm font-normal">ltr</span>
            </div>
            <div className="text-green-500 text-sm">(105 times)</div>
            <div className="text-gray-500 text-xs mt-1">Total Fuel Refill</div>
          </div>
          <div className="text-center">
            <GiFuelTank className="text-red-400 text-2xl mx-auto" />
            <div className="text-red-500 text-lg font-bold">
              68 <span className="text-sm font-normal">ltr</span>
            </div>
            <div className="text-red-400 text-sm">(10 times)</div>
            <div className="text-gray-500 text-xs mt-1">Total Fuel Drain</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetFuel;
