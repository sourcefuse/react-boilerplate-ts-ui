import axios from 'axios';
import {getAppConfiguration} from 'Configuration/configuration';
import {AuthContext} from 'Providers/AuthProvider';
import {useContext} from 'react';

const appConfig = getAppConfiguration();
const useAuth = () => {
  const {loggedIn, token, refreshToken, setAuth, setToken, setRefreshToken, authStateLoading, setAuthStateLoading} =
    useContext(AuthContext);
  const doLogIn = (token: string, refreshToken: string) => {
    setAuth(true, token, refreshToken);
  };
  const logOut = async () => {
    try {
      const baseUrl = appConfig.auth_api_base_url;
      const data = JSON.stringify({
        refreshToken,
      });
      const config = {
        method: 'post',
        url: baseUrl + '/logout',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data,
      };
      setAuthStateLoading(true);
      const response = await axios(config);
      console.log('response from logout endpoint => ', response);
    } catch (err) {
      console.log('Error from logout endpoint => ', err);
    } finally {
      setAuthStateLoading(false);
      setAuth(false, '', '');
    }
  };
  return {
    loggedIn,
    token,
    refreshToken,
    doLogIn,
    logOut,
    setToken,
    setRefreshToken,
    authStateLoading,
    setAuthStateLoading,
  };
};

export default useAuth;
