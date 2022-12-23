import axiosFactory from 'Helpers/axios';
import useQuery from 'Hooks/useQuery';
import {useEffect, useState} from 'react';

interface Configuration {
  clientId: string;
  clientSecret: string;
  authApiBaseUrl: string;
  appApiBaseUrl?: string;
  enableSessionTimeout?: string;
  storageSessionTimeKey?: string;
  expiryTimeInMinute?: string;
  warningAlertTimeoutInMinute?: string;
}
export interface AppConfiguration {
  clientId: string;
  clientSecret: string;
  authApiBaseUrl: string;
  appApiBaseUrl?: string;
  enableSessionTimeout: boolean;
  storageSessionTimeKey?: string;
  expiryTimeInMinute: number;
  warningAlertTimeoutInMinute: number;
}

const useConfig = () => {
  const [config, setConfig] = useState<AppConfiguration>({} as AppConfiguration);
  const client = axiosFactory();

  const {data: configData} = useQuery<{data: Configuration}>({
    key: ['config'],
    fn: () => client.get('/config.json'),
    options: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  });

  useEffect(() => {
    if (configData) {
      const data = configData?.data;
      const newConfig = {
        ...data,
        enableSessionTimeout: data?.enableSessionTimeout === 'true',
        expiryTimeInMinute: data?.expiryTimeInMinute ? +data.expiryTimeInMinute : 1,
        warningAlertTimeoutInMinute: data?.warningAlertTimeoutInMinute ? +data.warningAlertTimeoutInMinute : 1,
      };
      setConfig({...newConfig});
    }
  }, [configData]);

  return {config};
};

export default useConfig;
