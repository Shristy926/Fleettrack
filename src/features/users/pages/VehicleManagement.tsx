import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const VehicleManagement: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Parent Item */}
      <div
        className="flex items-center justify-between px-4 py-2 cursor-pointer text-black hover:text-white hover:bg-blue-600 transition-all rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-2">
          <Truck size={18} />
          <span>Vehicle Management</span>
        </div>
        {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </div>

      {/* Sub Items */}
      {isOpen && (
        <div className="ml-8 mt-2 space-y-1 text-sm text-black">
          <Link
            to="/vehicle-management/vehicle"
            className="block hover:text-white hover:bg-blue-600 px-2 py-1 rounded transition-all"
          >
            • Vehicle
          </Link>
          <Link
            to="/vehicle-management/trip"
            className="block hover:text-white hover:bg-blue-600 px-2 py-1 rounded transition-all"
          >
            • Trip
          </Link>
        </div>
      )}
    </div>
  );
};

export default VehicleManagement;
