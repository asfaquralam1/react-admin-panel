import api from "./axios";


// Get all news
export const fetchUsers = async () => {
  try {
    const response = await api.get("/api/users"); // adjust if endpoint different
    return response.data;
  } catch (error) {
    console.error("Users fetch error:", error.response?.data || error.message);
    throw error;
  }
};


// Get single news
export const fetchSingleUser = async (id) => {
  try {
    const response = await api.get(`/api/user/${id}`);
    return response.data;
  } catch (error) {
    console.error("Single news fetch error:", error.response?.data || error.message);
    throw error;
  }
};