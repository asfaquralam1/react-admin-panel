import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchNews } from "../../../api/newsApi";

function Products() {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchNews()
      .then(res => setNews(res.products)) // adjust if response structure different
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
    navigate(`/products/edit/${id}`);
  }

  return (
    <div className="table-wrapper">
      <h2>Products List</h2>

      <table className="info-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {news.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <button className="btn show">Show</button>
                <button className="btn edit" onClick={() => handleEdit(item.id)}>Edit</button>
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

export default Products;