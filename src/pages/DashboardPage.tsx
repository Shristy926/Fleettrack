import React from "react";
import FleetStatus from "../components/dashboard/FleetStatus";
import FleetUsage from "../components/dashboard/FleetUsage";
import FleetIdle from "../components/dashboard/FleetIdle";
import JobInformation from "../components/dashboard/JobInformation";
import DashboardCards from "../components/dashboard/DashboardCards";
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
                <div className="mt-2">
                    <JobInformation />
                </div>
            </div>
            <div className="w-full">
                <DashboardCards />
            </div>

        </div>
    );
};

export default DashboardPage;