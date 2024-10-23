import axios from "axios";
export const baseURL = "http://127.0.0.1:8000";
const axiosIinstance = axios.create({
  baseURL: baseURL,
});
export default axiosIinstance;
