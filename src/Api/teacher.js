import axios from "axios";
const URL = "http://localhost:8000/v1/selectedCours/detials";

export const teacherCourse = async (qs) => {
  const data = await axios.get(URL + qs);
  return data.data.data;
};
