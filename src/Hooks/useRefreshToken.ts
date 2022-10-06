import axios from 'axios';
import {getAppConfiguration} from 'Configuration/configuration';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const {refreshToken, token, setToken, setRefreshToken, logOut} = useAuth();

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
      console.log('response from refresh token endpoint => ', response);
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
      console.log('error while fetching refresh token => ', err);
      logOut();
    }
  };
};

export default useRefreshToken;
