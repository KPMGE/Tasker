import axios from "axios";

const api = axios.create({
  baseURL: "http://<ip address>:3333",
});

export default api;
