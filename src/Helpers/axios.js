import axios from 'axios';

// create axios instance
const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// create request interceptor to add header
client.interceptors.request.use(
  (config) => {
    // TODO read token from browser storage and attach to request header
    // const token = getAccessToken();
    // if (token) {
    //   config.headers.Authorization = 'Bearer ' + token;
    // }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

client.interceptors.response.use(
  (response) => {
    return response.data;
  },
  function (error) {
    if (error?.response?.status === 401) {
      // TODO clear browser storage in case of 401 and redirect to home
    }
    return Promise.reject(error?.response?.data);
  },
);

export default client;
