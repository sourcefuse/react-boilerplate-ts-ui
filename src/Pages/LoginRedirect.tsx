import BackdropLoader from 'Components/BackdropLoader/BackdropLoader';
import axiosFactory from 'Helpers/axios';
import useAuth from 'Hooks/useAuth';
import useConfig from 'Hooks/useConfig';
import {useEffect, useState} from 'react';
import {Navigate, useLocation, useSearchParams} from 'react-router-dom';

const LoginRedirect = () => {
  const {
    config: {authApiBaseUrl, clientId},
  } = useConfig();
  const [searchParam] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const {isLoggedIn} = useAuth();
  const location = useLocation();
  const locationState = location.state as {from: {pathname: string | null} | null};
  const from = locationState?.from?.pathname ?? '/';

  useEffect(() => {
    const code = searchParam.get('code');
    const getToken = async () => {
      try {
        const axios = axiosFactory(authApiBaseUrl);
        const url = 'auth/token';
        const data = {
          code,
          clientId,
        };
        const response = await axios.post(url, data);
        const accessToken = response.data?.accessToken;
        const refreshToken = response.data?.refreshToken;
        if (accessToken && refreshToken) {
          // doLogIn(accessToken, refreshToken);
        }
        setSuccess(!!accessToken);
      } catch (err) {
        console.error('error while fetching token => ', err);
        setSuccess(false);
      } finally {
        setIsLoading(false);
      }
    };
    if (!isLoggedIn && code) {
      getToken();
    } else {
      setIsLoading(false);
      setSuccess(isLoggedIn);
    }
  }, []);
  return isLoading ? <BackdropLoader /> : success ? <Navigate to={from} replace /> : <Navigate to="/login" replace />;
};

export default LoginRedirect;
