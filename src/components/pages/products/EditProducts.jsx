import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleNews } from "../../../api/newsApi";

function EditProducts() {
  const { id } = useParams();
  const [news, setNews] = useState({
    title: "",
    price: ""
  });

  useEffect(() => {
    fetchSingleNews(id).then((res) => {
      setNews({
        title: res.title,
        price: res.price
      });
    });
  }, [id]);

  const handleChange = (e) => {
    setNews({ ...news, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Data:", news);
    // update API call here
  };

  return (
    <div className="form-wrapper">
      <h2>Edit Products</h2>

      <form className="edit-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={news.title}
            onChange={handleChange}
            placeholder="Enter title"
          />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={news.price}
            onChange={handleChange}
            placeholder="Enter price"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn save">
            Update
          </button>
          <button type="button" className="btn cancel">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProducts;
