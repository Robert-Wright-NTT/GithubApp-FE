import axios from "axios";

const api = axios.create({
  baseURL: "",
});

const login = () => api.post("");

export { login };
