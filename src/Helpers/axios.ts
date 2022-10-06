import axiosDefault from 'axios';
import {getAppConfiguration} from '../Configuration';

const appConfiguration = getAppConfiguration();

// create axios instance
const axiosFactory = (baseUrl: string = appConfiguration.app_api_base_url) =>
  axiosDefault.create({
    baseURL: baseUrl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    // withCredentials: true,
  });

export default axiosFactory;
