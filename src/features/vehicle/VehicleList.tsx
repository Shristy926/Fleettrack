import React from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const rows = [
  {
    id: 1,
    vehicleId: "VH001",
    vehicleType: "Truck",
    model: "Volvo XC90",
    manufacture: "Volvo",
  },
  {
    id: 2,
    vehicleId: "VH002",
    vehicleType: "Bus",
    model: "Mercedes Tourismo",
    manufacture: "Mercedes",
  },
];

const VehicleList: React.FC = () => {
  const navigate = useNavigate();
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 5,
    page: 0,
  });

  const columns: GridColDef[] = [
    { field: "vehicleId", headerName: "Vehicle ID", width: 130 },
    { field: "vehicleType", headerName: "Vehicle Type", width: 130 },
    { field: "model", headerName: "Model", width: 200 },
    { field: "manufacture", headerName: "Manufacture", width: 200 },
    {
      field: "actions",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="space-x-2">
            <button 
             onClick={() => navigate('/vehicle-management/vehicle-form')}
             className="text-blue-600 hover:underline"
   >
              Add
            </button>
            <button
              onClick={() => navigate(`/vehicle-management/edit/${params.row.id}`)}
              className="text-blue-600 hover:underline"
            >
              Edit
            </button>
            <button className="text-red-600 hover:underline">Delete</button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-end p-4">
        <button
          onClick={() => navigate(`/vehicle-management/add`)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Vehicle
        </button>
      </div>
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

export default VehicleList;
