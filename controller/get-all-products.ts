import axios from 'axios';

const getAllProducts = async (): Promise<any[]> => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos').catch((err) => {
    console.log(err);
  });
  return data;
};

export default getAllProducts;
