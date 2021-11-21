import axios from "axios";

// const loginuser = async id => await axios.get(`http://localhost:4000/user/get/${id}`);
// const loginuser = async () => {
//     const { data } = await axios.get('http://localhost:4000/user/get');
//     console.log('in AXIOS ', data)
//     return data;
// }
const loginuser = async (data1) => {
  console.log("Data in Api", data1);
  const { data } = await axios.post("http://localhost:4000/user/login", data1);
  console.log("Return from api", data);
  localStorage.setItem("user", JSON.stringify(data));
  return data;
};
const signup = async (data) => {
  console.log(data);
  await axios.post("http://localhost:4000/user/add", data);
};

export default { loginuser, signup };
