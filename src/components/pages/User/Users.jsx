import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../../../services/userApi";

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers()
      .then(res => setUsers(res.data)) // adjust if response structure different
      .catch(err => console.log("Error:", err));
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure?");
    if (confirmDelete) {
      console.log("Delete ID:", id);
      // এখানে delete API call করবে
    }
  };

  const handleEdit = (id) => {
    console.log("Edit ID:", id);
    navigate(`edit/${id}`);
  }

  return (
    <div className="table-wrapper">
      <h2>Users</h2>

      <table className="info-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.uid}</td>
              <td>{item.first_name}</td>
              <td>{item.email}</td>
              <td>
                <button className="btn show">Show</button>
                <button className="btn edit" onClick={() => handleEdit(item.uid)}>Edit</button>
                <button
                  className="btn delete"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;