import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://hotelz-api.herokuapp.com',
  // baseURL: 'http://localhost:5000',
});
