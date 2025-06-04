import React, { useState } from "react";
import AddUserModal from "./AddUser";

const User: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mb-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Add
        </button>
        {/* Other buttons... */}
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded shadow-md">
        <table className="min-w-full text-sm">
          <thead className="border-b text-gray-600">
            <tr>
              <th className="text-left px-4 py-3">First Name</th>
              <th className="text-left px-4 py-3">Last Name</th>
              <th className="text-left px-4 py-3">Email</th>
              <th className="text-left px-4 py-3">Mobile Number</th>
              <th className="text-left px-4 py-3">Country</th>
              <th className="text-left px-4 py-3">Time Zone</th>
              <th className="text-left px-4 py-3">Act</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={7} className="text-blue-400 px-4 py-4">
                No data to display
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-gray-800 text-white text-sm px-4 py-2 mt-2 rounded shadow-inner">
        0 selected / total
      </div>

      {/* Modal */}
      <AddUserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default User;
