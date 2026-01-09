import axios from "axios";
export const getAllProduct = async () => {
  let { data } = await axios.get(`https://fakestoreapi.com/products`);
  // console.log(data);
  return data;
};
