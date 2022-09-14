import axios from 'axios';

const api = () => {
  return axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
  });
};

export default api;
