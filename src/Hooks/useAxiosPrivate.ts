import {useEffect, useMemo} from 'react';
import axiosFactory from '../Helpers/axios';
import useAuth from './useAuth';
import useRefreshToken from './useRefreshToken';

const useAxiosPrivate = (baseUrl) => {
  // const [url] = useState(baseUrl);
  const {token} = useAuth();
  const refresh = useRefreshToken();
  const privateAxiosInstance = useMemo(() => axiosFactory(baseUrl), []);
  useEffect(() => {
    const requestInterceptor = privateAxiosInstance.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );
    const responseInterceptor = privateAxiosInstance.interceptors.response.use(
      (response) => response.data,
      async (error) => {
        const prevRequest = error?.config;
        if ((error?.response?.status === 401 || error?.response?.status === 403) && !prevRequest?.sent) {
          prevRequest.sent = true;
          const {accessToken} = await refresh();
          prevRequest.headers.Authorization = `Bearer ${accessToken}`;
          return privateAxiosInstance(prevRequest);
        }
        return Promise.reject(error);
      },
    );
    return () => {
      privateAxiosInstance.interceptors.request.eject(requestInterceptor);
      privateAxiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [token, refresh]);

  return privateAxiosInstance;
};

export default useAxiosPrivate;
