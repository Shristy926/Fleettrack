import React from 'react';
import { Clock, Fuel } from 'lucide-react'; // optional icons

const FleetIdle = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full text-sm">
      <h2 className="text-base font-semibold text-gray-800 mb-2">Fleet Idle</h2>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-1 text-yellow-600 font-medium">
          <Clock size={16} />
          <span>Total Fleet Idle</span>
        </div>
        <span className="text-xl font-bold text-yellow-700">32 hrs</span>
      </div>
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-1 text-red-600 font-medium">
          <Fuel size={16} />
          <span>Approx Fuel Waste</span>
        </div>
        <span className="text-xl font-bold text-red-600">84 ltr</span>
      </div>
      <p className="text-xs text-gray-500">
        Note: Generally, an idling car uses somewhere between 1.89 to 2.64 liter of fuel per hour.
      </p>
    </div>
  );
};

export default FleetIdle;
