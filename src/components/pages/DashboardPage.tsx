import React from "react";
import FleetStatus from "../dashboard/FleetStatus";

import FleetUsage from "../dashboard/FleetUsage";
import FleetIdle from "../dashboard/FleetIdle";
import JobInformation from "../dashboard/JobInformation";
import AlertCardGroups from "../dashboard/AlertCardGroups";
// import VehicleStatus from "../components/dashboard/VehicleStatus";
// import FleetFuel from "../components/dashboard/FleetFuel";
// import AlertCardsGroup from "../components/dashboard/AlertCardGroups";
// import OverspeedList from "../components/Reports/OverspeedList";

const DashboardPage: React.FC = () => {
  return (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {/* First Row: 3 Equal Columns */}
  <div className="w-full h-full">
    <FleetStatus />
  </div>

  <div className="w-full h-full">
    <FleetUsage />
  </div>

  <div className="w-full h-full">
    <FleetIdle />
  </div>

  {/* Second Row: JobInformation full width across 3 columns */}
  <div className="col-span-1 md:col-span-3 w-full h-full">
    <JobInformation />
  </div>
</div>



  //   <div className= "space-y-8 p-4" >
  //   {/* Fleet Summary Cards */ }
  //   < div className = "grid grid-cols-1 lg:grid-cols-3 gap-4" >
  //     <div className="h-full" >
  //       <FleetStatus />
  //       </div>
  //       < div className = "h-full" >
  //         <FleetUsage />

  //         < div className = "flex flex-col gap-4 h-full" >
  //           <FleetIdle />
  //           < JobInformation />

  //           </div>
  //           < div className = "mt-6" >
  //             <h2 className="text-lg font-semibold text-gray-800 mb-2" > Alerts </h2>
  //               < AlertCardsGroup />
  //               // <OverspeedList/>

  //               // {/* Alert Cards Section */}

  //               < div className = "p-6 bg-gray-100" >
  //                 <FleetFuel />


  // {/* Vehicle Status */ }
  // <VehicleStatus />
  //   </div>
  //   </div>
  //   </div>
  //   </div>
  //   </div>
  );
};

export default DashboardPage;