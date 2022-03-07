import Axios from "../config/axios";

export const getAtmData = async () => {
  return Axios.get("/");
};
