import React, { useState } from 'react';

type ModuleGroup = {
  groupTitle: string;
  modules: {
    title: string;
    permissions: string[];
  }[];
};

const groupedModules: ModuleGroup[] = [
  {
    groupTitle: 'MobileApp => Vehicle',
    modules: [
      {
        title: 'Live Tracking',
        permissions: ['Live Tracking'],
      },
      {
        title: 'Route',
        permissions: ['Route'],
      },
    ],
  },
  {
    groupTitle: 'WebSite => Vehicle',
    modules: [
      {
        title: 'DriverManagement',
        permissions: ['DriverManagement'],
      },
      {
        title: 'Dashboard',
        permissions: ['Dashboard'],
      },
      {
        title: 'Asset Management',
        permissions: ['Asset Management', 'Asset'],
      },
      {
        title: 'Safe Traverse',
        permissions: ['Safe Traverse', 'Route Planning'],
      },
      {
        title: 'Maintenance',
        permissions: ['Maintenance', 'Schedule Maintenance'],
      },
      {
        title: 'Location Services',
        permissions: ['Location Services', 'Routes', 'Geofencing', 'Live Tracking'],
      },
      {
        title: 'Vehicle Management',
        permissions: ['Vehicle Management', 'Vehicle', 'Trip'],
      },
      {
        title: 'Device Management',
        permissions: ['Device Management', 'Devices'],
      },
      {
        title: 'Sim Management',
        permissions: ['Sim Management', 'Sim Cards'],
      },
      {
        title: 'APIs',
        permissions: ['APIs', 'Keys'],
      },
      {
        title: 'Organization',
        permissions: ['Organization', 'Information'],
      },
    ],
  },
  {
    groupTitle: 'WebSite => Common',
    modules: [
      {
        title: 'User Management',
        permissions: ['User Management', 'Role And Operation', 'User'],
      },
      {
        title: 'Reports',
        permissions: [
          'Reports',
          'Connection Trend',
          'Harsh Braking',
          'Route',
          'Speeding',
          'Idle Time',
          'Trip Summary',
          'Harsh Cornering',
          'Harsh Acceleration',
          'Distance',
        ],
      },
    ],
  },
];

const RoleOperation: React.FC = () => {
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);

  const togglePermission = (perm: string) => {
    setSelectedPermissions((prev) =>
      prev.includes(perm) ? prev.filter((p) => p !== perm) : [...prev, perm]
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Buttons */}
      <div className="flex items-center justify-start gap-4 mb-6">
        <button className="bg-gray-700 text-white px-4 py-2 rounded shadow hover:bg-gray-800">
          Select Role
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
          Add Role
        </button>
      </div>

      {/* Module Groups */}
      {groupedModules.map((group) => (
        <div key={group.groupTitle} className="mb-10">
          <div className="bg-gray-200 px-4 py-2 rounded text-purple-600 font-semibold mb-4">
            {group.groupTitle}
          </div>

          {/* Grid of Modules (2 per row on medium+, 1 per row on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {group.modules.map((mod) => (
              <div key={mod.title} className="bg-white rounded border shadow-sm">
                <div className="bg-gray-100 px-4 py-2 font-semibold text-gray-800 border-b">
                  {mod.title}
                </div>
                <div className="p-4 grid grid-cols-1 gap-2">
                  {mod.permissions.map((perm) => (
                    <label
                      key={perm}
                      className="flex items-center space-x-2 text-sm text-gray-800"
                    >
                      <input
                        type="checkbox"
                        checked={selectedPermissions.includes(perm)}
                        onChange={() => togglePermission(perm)}
                        className="w-4 h-4"
                      />
                      <span>{perm}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoleOperation;
