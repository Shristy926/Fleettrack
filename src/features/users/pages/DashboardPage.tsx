import React from "react";
import FleetUsage from "../components/dashboard/FleetUsage";
import FleetStatus from "../components/dashboard/FleetStatus";
import FleetIdle from "../components/dashboard/FleetIdle";
import JobInformation from "../components/dashboard/JobInformation";
import DashboardCards from "../components/dashboard/DashboardCards";
import GroupCards from "../components/dashboard/GroupCards";
// import FleetStatus from "../components/dashboard/FleetStatus";
// import FleetUsage from "../components/dashboard/FleetUsage";
// import FleetIdle from "../components/dashboard/FleetIdle";
// import JobInformation from "../components/dashboard/JobInformation";
// import DashboardCards from "../components/dashboard/DashboardCards";
// import GroupCards from "../components/dashboard/GroupCards";

const DashboardPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen space-y-4">
      
      {/* Top Grid: 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FleetStatus />
        <FleetUsage />
        
        <div className="space-y-2">
          <FleetIdle />
          <JobInformation />
        </div>
      </div>

      {/* Bottom Section: Full Width Cards */}
      <div className="space-y-4">
        <DashboardCards />
        <GroupCards />
      </div>
      
    </div>
  );
};

export default DashboardPage;
