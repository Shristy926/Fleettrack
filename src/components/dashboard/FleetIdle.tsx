import React from "react";
import { FaCarSide, FaGasPump } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";

const FleetIdle: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-1 w-full max-w-sm text-[12px]">
      <h2 className="text-sm font-semibold mb-3">Fleet Idle</h2>

      <div className="flex items-center justify-between text-center mb-2">
        {/* Total Fleet Idle */}
        <div className="flex flex-col items-center text-yellow-600 w-1/3">
          <FaCarSide className="text-lg mb-1" />
          <span className="text-[11px] text-gray-500">Fleet Idle</span>
          <span className="text-lg font-bold">
            32 <span className="text-[10px] font-normal">hrs</span>
          </span>
        </div>

        {/* Arrow */}
        <IoMdArrowRoundForward className="text-gray-400 text-xl mx-1" />

        {/* Approx Fuel Waste */}
        <div className="flex flex-col items-center text-red-500 w-1/3">
          <FaGasPump className="text-lg mb-1" />
          <span className="text-[11px] text-gray-500">Fuel Waste</span>
          <span className="text-lg font-bold">
            84 <span className="text-[10px] font-normal">ltr</span>
          </span>
        </div>
      </div>

      <p className="text-[10px] text-gray-500 mt-1 leading-tight">
        <span className="font-medium">Note:</span> Idling uses 1.89–2.64L of fuel per hour.
      </p>
    </div>
  );
};

export default FleetIdle;
