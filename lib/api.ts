import axios from "axios";

const api = axios.create({
  baseURL: "https://website-backend-zm17.onrender.com/api",
});

export default api;
