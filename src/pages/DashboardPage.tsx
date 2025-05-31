import React from "react";
import FleetStatus from "../components/dashboard/FleetStatus";
import FleetUsage from "../components/dashboard/FleetUsage";
import FleetIdle from "../components/dashboard/FleetIdle";
import JobInformation from "../components/dashboard/JobInformation";
import DashboardCards from "../components/dashboard/DashboardCards";
import GroupCard from "../components/dashboard/GroupCard";

const DashboardPage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-gray-100 min-h-screen">
      {/* First Row: 3 Equal Columns */}
      <div className="w-full h-full">
        <FleetStatus />
      </div>

      <div className="w-full h-full">
        <FleetUsage />
      </div>

      <div className="w-full h-full">
        <FleetIdle />
        <div className="mt-2">
          <JobInformation />
        </div>
      </div>

      {/* Full Width Section below the 3-column grid */}
      <div className="col-span-1 md:col-span-3 space-y-4">
        <DashboardCards />
        <GroupCard />
      </div>
    </div>
  );
};

export default DashboardPage;
