import {useEffect, useMemo} from 'react';
import axiosFactory from '../Helpers/axios';
import useAuth from './useAuth';

const useAxios = (baseUrl?: string) => {
  const {authData, refresh, logout} = useAuth();
  const axiosInstance = useMemo(() => axiosFactory(baseUrl), [baseUrl]);
  useEffect(() => {
    axiosInstance.interceptors.request.use(
      (config) => {
        if (config?.headers && authData?.accessToken && !config.headers.Authorization) {
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
          const refreshData = await refresh();
          if (refreshData?.accessToken) {
            prevRequest.headers.Authorization = `Bearer ${refreshData.accessToken}`;
            return axiosInstance(prevRequest);
          }
        } else {
          logout();
        }
      },
    );
  }, [axiosInstance, authData.accessToken, refresh, logout]);

  return axiosInstance;
};

export default useAxios;
