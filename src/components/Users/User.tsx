import React from "react";
import { useNavigate } from "react-router-dom";

const User: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Top action buttons */}
      <div className="flex flex-wrap gap-4 mb-6">
        <button
          onClick={() => navigate("/user-management/add-user")}
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Add
        </button>

        <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 transition">
          Edit
        </button>

        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition">
          Deactivate
        </button>

        <button className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition">
          Activate
        </button>

        <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition">
          Reset Password
        </button>
      </div>

      {/* User Table */}
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
              <td className="px-4 py-3">John</td>
              <td className="px-4 py-3">Doe</td>
              <td className="px-4 py-3">john@example.com</td>
              <td className="px-4 py-3">9876543210</td>
              <td className="px-4 py-3">India</td>
              <td className="px-4 py-3">IST</td>
              <td className="px-4 py-3 space-x-2">
                <button
                  onClick={() => navigate("/user-management/edit-user/1")}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button className="text-red-600 hover:underline">Deactivate</button>
                <button className="text-green-600 hover:underline">Activate</button>
                <button className="text-purple-600 hover:underline">Reset</button>
              </td>
            </tr>

            <tr>
              <td colSpan={7} className="text-blue-400 px-4 py-4 text-center">
                {/* Only show this if no users */}
                No data to display
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
