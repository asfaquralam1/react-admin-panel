import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { fetchUsers } from "../../../services/userApi";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers()
      .then((res) => {
        // DataGrid must have unique "id" field
        const formattedData = res.data.map((item) => ({
          id: item.uid, // IMPORTANT: DataGrid requires id
          uid: item.uid,
          first_name: item.first_name,
          last_name: item.last_name,
          phone: item.phone,
          email: item.email,
        }));
        setUsers(formattedData);
      })
      .catch((err) => console.log("Error:", err));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      console.log("Delete ID:", id);
      // delete API call here
    }
  };

  const handleEdit = (id) => {
    navigate(`edit/${id}`);
  };

  const handleShow = (id) => {
    navigate(`show/${id}`);
  };

  const columns = [
    { field: "uid", headerName: "ID", width: 150 },
    { field: "first_name", headerName: "First name", width: 150 },
    { field: "last_name", headerName: "Last name", width: 150 },
    { field: "phone", headerName: "Phone", width: 200 },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "actions",
      headerName: "Actions",
      width: 300,
      sortable: false,
      headerAlign: "center",
      renderCell: (params) => (
        <>
          <Button
            variant="contained"
            size="small"
            sx={{ mr: 1 }}
            onClick={() => handleShow(params.row.uid)}
          >
            Show
          </Button>

          <Button
            variant="contained"
            size="small"
            color="warning"
            sx={{ mr: 1 }}
            onClick={() => handleEdit(params.row.uid)}
          >
            Edit
          </Button>

          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => handleDelete(params.row.uid)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <Box>
      <h2>Users</h2>
      <DataGrid
        disableExtendRowFullWidth
        className="info-table"
        rows={users}
        columns={columns}
        pageSizeOptions={[5, 10, 20]}
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            paddingRight: "0px",
          },
          "& .MuiDataGrid-row:hover": {
            color: "black",
          },
          "& .MuiDataGrid-columnSeparator": {
            display: "none",
          },
        }}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10, page: 0 },
          },
        }}
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default Users;
