import api from "./axios";


// Get all news
export const fetchNews = async () => {
  try {
    const response = await api.get("/products"); // adjust if endpoint different
    return response.data;
  } catch (error) {
    console.error("News fetch error:", error.response?.data || error.message);
    throw error;
  }
};

// Get single news
export const fetchSingleNews = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Single news fetch error:", error.response?.data || error.message);
    throw error;
  }
};