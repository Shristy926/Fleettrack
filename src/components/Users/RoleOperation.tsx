import React, { useState } from 'react';

const modules = [
  {
    title: 'Live Tracking',
    permissions: ['Live Tracking'],
  },
  {
    title: 'Route',
    permissions: ['Route'],
  },
  {
    title: 'DriverManagement',
    permissions: ['DriverManagement'], // ✅ Fixed
  },
  {
    title: 'Dashboard',
    permissions: ['Dashboard'],
  },
  {
    title: 'Reports',
    permissions: ['Reports'],
  },
];


const RoleOperation: React.FC = () => {
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);

  const togglePermission = (perm: string) => {
    setSelectedPermissions((prev) =>
      prev.includes(perm)
        ? prev.filter((p) => p !== perm)
        : [...prev, perm]
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

      {/* Section Header */}
      <div className="bg-gray-200 px-4 py-2 rounded text-purple-600 font-semibold mb-4">
        MobileApp =&gt; Vehicle
      </div>

      {/* Modules and Permissions */}
      <div className="space-y-6">
        {modules.map((mod) => (
          <div key={mod.title} className="bg-white rounded border shadow-sm">
            <div className="bg-gray-100 px-4 py-2 font-semibold text-gray-800 border-b">
              {mod.title}
            </div>
            <div className="p-4 space-y-2">
              {mod.permissions.map((perm) => (
                <label key={perm} className="flex items-center space-x-2 text-gray-800">
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
  );
};

export default RoleOperation
