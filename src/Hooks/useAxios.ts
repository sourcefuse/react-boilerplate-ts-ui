import {useEffect, useMemo} from 'react';
import axiosFactory from '../Helpers/axios';
import useAuth from './useAuth';

const useAxios = (baseUrl?: string) => {
  const {authData, refresh} = useAuth();
  const axiosInstance = useMemo(() => axiosFactory(baseUrl), [baseUrl]);
  useEffect(() => {
    axiosInstance.interceptors.request.use(
      (config) => {
        if (config?.headers && authData?.accessToken) {
          config.headers.Authorization = `Bearer ${authData.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );
    axiosInstance.interceptors.response.use(
      (response) => response.data,
      async (error) => {
        const prevRequest = error?.config;
        if ((error?.response?.status === 401 || error?.response?.status === 403) && !prevRequest?.sent) {
          prevRequest.sent = true;
          const {accessToken} = await refresh();
          prevRequest.headers.Authorization = `Bearer ${accessToken}`;
          return axiosInstance(prevRequest);
        }
        return Promise.reject(error);
      },
    );
  }, [axiosInstance, authData.accessToken, refresh]);

  return axiosInstance;
};

export default useAxios;
