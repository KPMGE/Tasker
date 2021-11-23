import axios from "axios";

const api = axios.create({
  baseURL: "http://<local ip address here>:3333",
});

export default api;
