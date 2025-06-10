import React from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

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
];

const User: React.FC = () => {
  const navigate = useNavigate();
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 5,
    page: 0,
  });

  const columns: GridColDef[] = [
    { field: "firstName", headerName: "First Name", width: 130 },
    { field: "lastName", headerName: "Last Name", width: 130 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "mobile", headerName: "Mobile Number", width: 150 },
    { field: "country", headerName: "Country", width: 120 },
    { field: "timezone", headerName: "Time Zone", width: 120 },
    {
      field: "actions",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="space-x-2">
            <button
              onClick={() => navigate(`/user-management/add-user`)}
              className="text-blue-600 hover:underline"
            >
              Add
            </button>
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
  return (
    <div className="bg-gray-100 min-h-screen">
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
