import { axiosInstance } from './axios';

const apiService = (url, method, data) => {
  return new Promise((resolve, reject) => {
    axiosInstance({
      url,
      method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default apiService;
