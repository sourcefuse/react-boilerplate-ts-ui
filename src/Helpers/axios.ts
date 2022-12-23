import axiosDefault from 'axios';

// create axios instance
const axiosFactory = (baseUrl?: string) =>
  axiosDefault.create({
    baseURL: baseUrl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

export default axiosFactory;
