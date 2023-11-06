// $lib/api.js
import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_SERVER}`,
  withCredentials: true,
});

export default api;
