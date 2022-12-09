import axios from 'axios';
import {getAppConfiguration} from 'Configuration/configuration';
import {AuthContext} from 'Providers/AuthProvider';
import {useContext} from 'react';

const appConfig = getAppConfiguration();
const useAuth = () => {
  const {isLoggedIn, token, refreshToken, setAuth, setToken, setRefreshToken, authStateLoading, setAuthStateLoading} =
    useContext(AuthContext);
  const doLogIn = (token: string, refreshToken: string) => {
    setAuth(true, token, refreshToken);
  };
  const logout = async () => {
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
      await axios(config);
    } catch (err) {
      console.error('Error from logout endpoint => ', err);
    } finally {
      setAuthStateLoading(false);
      setAuth(false, '', '');
    }
  };
  return {
    isLoggedIn,
    token,
    refreshToken,
    doLogIn,
    logout,
    setToken,
    setRefreshToken,
    authStateLoading,
    setAuthStateLoading,
  };
};

export default useAuth;
