import React, { useEffect, useRef } from 'react';
import { Car } from 'lucide-react';

interface MapProps {
  vehicles: {
    id: string;
    name: string;
    location: {
      lat: number;
      lng: number;
    };
    status: 'active' | 'inactive' | 'maintenance';
  }[];
  className?: string;
}

const Map: React.FC<MapProps> = ({ vehicles, className = '' }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  // This is a mockup of a map component
  // In a real application, you would integrate with a mapping library like Mapbox or Google Maps
  return (
    <div 
      ref={mapRef}
      className={`relative w-full h-full min-h-[400px] bg-blue-50 rounded-lg overflow-hidden ${className}`}
    >
      {/* Map placeholder with styling to look like a map */}
      <div className="absolute inset-0 bg-[#F8F9FA]">
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2392ADAD' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>
        
        {/* Grid lines to simulate a map */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), 
                          linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}
        ></div>
        
        {/* Roads */}
        <div className="absolute left-[10%] right-[10%] top-[30%] h-[3px] bg-gray-300 rounded"></div>
        <div className="absolute left-[20%] top-[10%] bottom-[10%] w-[3px] bg-gray-300 rounded"></div>
        <div className="absolute left-[60%] top-[10%] bottom-[10%] w-[3px] bg-gray-300 rounded"></div>
        <div className="absolute left-[20%] right-[10%] top-[70%] h-[3px] bg-gray-300 rounded"></div>
        
        {/* Vehicle markers */}
        {vehicles.map((vehicle) => {
          // Calculate position based on latitude and longitude
          // This is just a mock calculation for demonstration
          const leftPos = ((vehicle.location.lng + 122.5) * 100) % 80 + 10; // Just a formula to position within the container
          const topPos = ((vehicle.location.lat - 37.5) * 100) % 80 + 10;
          
          // Determine color based on status
          let bgColor = 'bg-green-500';
          if (vehicle.status === 'inactive') bgColor = 'bg-gray-500';
          if (vehicle.status === 'maintenance') bgColor = 'bg-amber-500';
          
          return (
            <div 
              key={vehicle.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center`}
              style={{ left: `${leftPos}%`, top: `${topPos}%` }}
            >
              <div className={`${bgColor} p-2 rounded-full shadow-md`}>
                <Car className="h-4 w-4 text-white" />
              </div>
              <div className="mt-1 px-2 py-1 bg-white/90 rounded text-xs font-medium shadow-sm">
                {vehicle.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Map;