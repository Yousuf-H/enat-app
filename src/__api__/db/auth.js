import axios from "axios";

const API_BASE_URL = "http://localhost:3000"; // Change this to your actual backend URL

export const login = async (email, password) => {
  console.log("HELLOW", API_BASE_URL);
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
    return response.data; // Assuming the backend returns { token, user }
  } catch (error) {
    console.error("Login failed", error);
    throw error.response?.data || { message: "Login error" };
  }
};

export const register = async (email, username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, { email, username, password });
    return response.data;
  } catch (error) {
    console.error("Registration failed", error);
    throw error.response?.data || { message: "Registration error" };
  }
};

export const getProfile = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error("Profile fetch failed", error);
    throw error.response?.data || { message: "Profile fetch error" };
  }
};
