import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // backend base URL
});

// Add token to every request if logged in
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token"); // store JWT in localStorage
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
