import BackdropLoader from 'Components/BackdropLoader/BackdropLoader';
import {getAppConfiguration} from 'Configuration/configuration';
import axiosFactory from 'Helpers/axios';
import useAuth from 'Hooks/useAuth';
import {useEffect, useState} from 'react';
import {Navigate, useLocation, useSearchParams} from 'react-router-dom';

const LoginRedirect = () => {
  const [searchParam] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const {doLogIn, loggedIn} = useAuth();
  const location = useLocation();
  const locationState = location.state as {from: {pathname: string | null} | null};
  const from = locationState?.from?.pathname ?? '/';
  console.log('redirect login from => ', from);

  useEffect(() => {
    const code = searchParam.get('code');
    const getToken = async () => {
      try {
        const appConfig = getAppConfiguration();
        const axios = axiosFactory(appConfig.auth_api_base_url);
        const url = 'auth/token';
        const data = {
          code,
          clientId: appConfig.azure_client_id,
        };
        const response = await axios.post(url, data);
        const accessToken = response.data?.accessToken;
        const refreshToken = response.data?.refreshToken;
        if (accessToken && refreshToken) {
          doLogIn(accessToken, refreshToken);
        }
        setSuccess(!!accessToken);
      } catch (err) {
        console.log('error while fetching token => ', err);
        setSuccess(false);
      } finally {
        setIsLoading(false);
      }
    };
    if (!loggedIn && code) {
      getToken();
    } else {
      setIsLoading(false);
      setSuccess(loggedIn);
    }
  }, []);
  return isLoading ? <BackdropLoader /> : success ? <Navigate to={from} replace /> : <Navigate to="/login" replace />;
};

export default LoginRedirect;
