// src/pages/AssetManagement.tsx
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  isCollapsed?: boolean;
}

const AssetManagement: React.FC<Props> = ({ isCollapsed }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (isCollapsed) {
    return (
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-center p-3 cursor-pointer text-gray-700 hover:bg-indigo-100 rounded"
        title="Asset Management"
      >
        <Package size={20} />
      </div>
    );
  }

  return (
    <div>
      {/* Parent Item */}
      <div
        className="flex items-center justify-between px-4 py-2 cursor-pointer text-black hover:text-white hover:bg-blue-600 transition-all rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-2">
          <Package size={18} />
          <span>Asset Management</span>
        </div>
        {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </div>

      {/* Sub Items */}
      {isOpen && (
        <div className="ml-8 mt-2 space-y-1 text-sm text-black">
          <Link
            to="/asset-management/assets"
            className="block hover:text-white hover:bg-blue-600 px-2 py-1 rounded transition-all"
          >
            • Assets
          </Link>
        </div>
      )}
    </div>
  );
};

export default AssetManagement;
