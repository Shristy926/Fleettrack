import React from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "firstName", headerName: "First Name", width: 130 },
  { field: "lastName", headerName: "Last Name", width: 130 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "mobile", headerName: "Mobile Number", width: 150 },
  { field: "country", headerName: "Country", width: 120 },
  { field: "timezone", headerName: "Time Zone", width: 120 },
  {
    field: "actions",
    headerName: "Act",
    width: 300,
    renderCell: (params) => {
      const navigate = useNavigate();
      return (
        <div className="space-x-2">
          <button
            onClick={() => navigate(`/user-management/edit-user/${params.row.id}`)}
            className="text-blue-600 hover:underline"
          >
            Edit
          </button>
          <button className="text-red-600 hover:underline">Deactivate</button>
          <button className="text-green-600 hover:underline">Activate</button>
          <button className="text-purple-600 hover:underline">Reset</button>
        </div>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    mobile: "9876543210",
    country: "India",
    timezone: "IST",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane@example.com",
    mobile: "9876501234",
    country: "USA",
    timezone: "PST",
  },
  // Add more sample rows or fetch from API
];

const User: React.FC = () => {
  const navigate = useNavigate();
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 5,
    page: 0,
  });

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
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 transition">
          Edit
        </button>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition">
          Deactivate
        </button>
        <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition">
          Activate
        </button>
        <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition">
          Reset Password
        </button>
      </div>

      {/* DataGrid with Pagination */}
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pagination
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[5, 10, 25, 50]}
        />
      </div>
    </div>
  );
};

export default User;
