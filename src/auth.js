import axios from "axios";

const url = "https://boiling-tundra-97843.herokuapp.com";

export const getStudents = async () => {
  try {
    const data = await axios.get(`${url}/students`);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const getColleges = async () => {
  try {
    const data = await axios.get(`${url}/colleges`);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
