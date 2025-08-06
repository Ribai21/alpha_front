import axios from "axios";
import { API_URL } from "../components/Constant.js";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to set auth token in headers
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("token", token); // Store token in local storage
  } else {
    delete api.defaults.headers.common["Authorization"];
    localStorage.removeItem("token"); // Remove token
  }
};

// Signup function
export const signup = async (userData) => {
  const response = await api.post("/signup", userData);
  return response.data;
};

// Login function
export const login = async (userData) => {
  const response = await api.post("/login", userData);
  setAuthToken(response.data.token); // Store token after login
  return response.data;
};

// Logout function
export const logout = async () => {
  await api.post("/logout");
  setAuthToken(null); // Remove token on logout
};

export default api;
