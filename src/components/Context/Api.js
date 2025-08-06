import axios from "axios";
import { API_URL } from "../Constant.js";


// const BASE_URL = "http://localhost:4000"; // Backend URL

// export const loginUser = async (email, password) => {
//   try {
//     const response = await axios.post(`${BASE_URL}/login`, { email, password });
//     return response.data;
//   } catch (error) {
//     return { message: "Login failed. Please try again." };
    
//   }
// };



export const registerUser = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data; // Return response from server
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};



