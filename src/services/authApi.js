import api from "./axios";

export const loginUser = async (credentials) => {
  try {
    const response = await api.post("auth/login", credentials);

    // Save token to localStorage
    localStorage.setItem("token", response.data.accessToken);
    localStorage.setItem("user", JSON.stringify(response.data));

    return response.data;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

