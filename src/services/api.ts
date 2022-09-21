import axios from 'axios';

const conigApi = axios.create({
  baseURL: process.env.REACT_APP_URL_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default conigApi;
