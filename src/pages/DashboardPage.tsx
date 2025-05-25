import React from "react";
import FleetStatus from "../components/dashboard/FleetStatus";
import FleetUsage from "../components/dashboard/FleetUsage";
import FleetIdle from "../components/dashboard/FleetIdle";
import JobInformation from "../components/dashboard/JobInformation";
import VehicleStatus from "../components/dashboard/VehicleStatus";
import FleetFuel from "../components/dashboard/FleetFuel";
import AlertCardsGroup from "../components/dashboard/AlertCardGroups";
import OverspeedList from "./Reports/OverspeedList";

const DashboardPage: React.FC = () => {
  return (
    <div className= "space-y-8 p-4" >
    {/* Fleet Summary Cards */ }
    < div className = "grid grid-cols-1 lg:grid-cols-3 gap-4" >
      <div className="h-full" >
        <FleetStatus />
        </div>
        < div className = "h-full" >
          <FleetUsage />

          < div className = "flex flex-col gap-4 h-full" >
            <FleetIdle />
            < JobInformation />

            </div>
            < div className = "mt-6" >
              <h2 className="text-lg font-semibold text-gray-800 mb-2" > Alerts </h2>
                < AlertCardsGroup />
                // <OverspeedList/>

                // {/* Alert Cards Section */}

                < div className = "p-6 bg-gray-100" >
                  <FleetFuel />


  {/* Vehicle Status */ }
  <VehicleStatus />
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default DashboardPage;