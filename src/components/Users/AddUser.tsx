import React from "react";

type AddUserModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddUser: React.FC<AddUserModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6 shadow-lg">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-xl font-semibold">Add User</h2>
          <button onClick={onClose} className="text-gray-600 text-xl">&times;</button>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600">First Name:</label>
              <input type="text" placeholder="First name" className="w-full border px-3 py-2 rounded bg-gray-100" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Last Name:</label>
              <input type="text" placeholder="Last name" className="w-full border px-3 py-2 rounded bg-gray-100" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Email:</label>
              <input type="email" placeholder="Email" className="w-full border px-3 py-2 rounded bg-gray-100" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Mobile Number:</label>
              <input type="text" placeholder="Mobile number" className="w-full border px-3 py-2 rounded bg-gray-100" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Country:</label>
              <select className="w-full border px-3 py-2 rounded bg-gray-100">
                <option>Select Country</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600">Time Zone:</label>
              <select className="w-full border px-3 py-2 rounded bg-gray-100">
                <option>Select Time Zone</option>
              </select>
            </div>
          </div>

          <div className="border bg-gray-50 text-center text-gray-800 py-4 mt-4 rounded">
            Applications and Roles
          </div>

          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-600"
            >
              Close
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
