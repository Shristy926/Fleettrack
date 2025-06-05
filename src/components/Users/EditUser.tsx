// src/pages/EditUser.tsx

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser: React.FC = () => {
  const navigate = useNavigate();
  const { userId } = useParams(); // Assuming URL like /edit-user/:userId

  // Simulated user state — in real apps, fetch this from an API
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    country: "",
    timeZone: "",
  });

  useEffect(() => {
    // Fetch user data using userId
    // Example placeholder (replace with real API call)
    const fetchedData = {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      mobile: "9876543210",
      country: "India",
      timeZone: "IST",
    };
    setUserData(fetchedData);
  }, [userId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Save logic here
    console.log("Updated user:", userData);
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6 shadow-lg">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-xl font-semibold">Edit User</h2>
          <button onClick={() => navigate(-1)} className="text-gray-600 text-xl">&times;</button>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600">First Name:</label>
              <input
                type="text"
                name="firstName"
                value={userData.firstName}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={userData.lastName}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Email:</label>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Mobile Number:</label>
              <input
                type="text"
                name="mobile"
                value={userData.mobile}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Country:</label>
              <select
                name="country"
                value={userData.country}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded bg-gray-100"
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600">Time Zone:</label>
              <select
                name="timeZone"
                value={userData.timeZone}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded bg-gray-100"
              >
                <option value="">Select Time Zone</option>
                <option value="IST">IST</option>
                <option value="PST">PST</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
