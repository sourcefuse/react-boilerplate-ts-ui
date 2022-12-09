import axios from 'axios';
import {getAppConfiguration} from 'Configuration/configuration';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const {refreshToken, token, setToken, setRefreshToken, logout} = useAuth();

  return async () => {
    try {
      const appConfig = getAppConfiguration();
      const baseUrl = appConfig.auth_api_base_url;
      const data = JSON.stringify({
        refreshToken,
      });
      const config = {
        method: 'post',
        url: baseUrl + '/auth/token-refresh',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data,
      };

      const response = await axios(config);
      const responseData = response.data;
      const accessToken = responseData.accessToken;
      const newRefreshToken = responseData.refreshToken;
      setToken(accessToken);
      setRefreshToken(newRefreshToken);
      return {
        accessToken,
        refreshToken: newRefreshToken,
      };
    } catch (err) {
      console.error('error while fetching refresh token => ', err);
      logout();
    }
  };
};

export default useRefreshToken;
