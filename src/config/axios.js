import axios from "axios";

const Axios = axios.create({
  baseURL: "https://api.npoint.io/e9cb7acc6095dff4004a",
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

export default Axios;
