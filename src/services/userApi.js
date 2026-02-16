import api from "./axios";


// Get all Users
export const fetchUsers = async () => {
  try {
    const response = await api.get("/api/users"); // adjust if endpoint different
    return response.data;
  } catch (error) {
    console.error("Users fetch error:", error.response?.data || error.message);
    throw error;
  }
};


// Get single user
export const fetchSingleUser = async (id) => {
  try {
    const response = await api.get(`/api/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Single news fetch error:", error.response?.data || error.message);
    throw error;
  }
};

//Edit User
export const editSingleUser = async (id) => {
  try {
    const response = await api.get(`/api/users/${id}/edit`);
    return response.data;
  } catch (error) {
    console.error("Single news fetch error:", error.response?.data || error.message);
    throw error;
  }
};

//Edit User
export const updateSingleUser = async (id) => {
  try {
    const response = await api.get(`/api/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Single news fetch error:", error.response?.data || error.message);
    throw error;
  }
};