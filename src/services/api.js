import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://68cff2beec1a5ff33825fc5a.mockapi.io/services/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
