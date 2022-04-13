import axios from "axios";
const URL = "http://localhost:8000/v1/section";

export const getSection = async (id) => {
  const data = await axios.get(URL);
  return data.data.data.section;
};
