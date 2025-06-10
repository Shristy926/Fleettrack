import React from 'react';
import VehicleStatusCard from './VehicleStatusCard';
import { vehicles } from '../../data/mockData';

const VehicleStatus: React.FC = () => {
  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900 mb-4">
        Vehicle Status
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {vehicles.map((vehicle) => (
          <VehicleStatusCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default VehicleStatus;
