import {useEffect, useState} from 'react';
import {selectConfigData} from 'redux/config/configSlice';
import {useAppSelector} from 'redux/hooks';

export interface AppConfiguration {
  clientId: string;
  authApiBaseUrl: string;
  appApiBaseUrl?: string;
  enableSessionTimeout: boolean;
  storageSessionTimeKey?: string;
  expiryTimeInMinute: number;
  promptTimeBeforeIdleInMinute: number;
}
const DEFAULT_EXPIRY_TIME = 15;
const useConfig = () => {
  const [config, setConfig] = useState<AppConfiguration>({} as AppConfiguration);
  const configData = useAppSelector(selectConfigData);

  useEffect(() => {
    if (configData) {
      const newConfig: AppConfiguration = {
        ...configData,
        enableSessionTimeout: configData.enableSessionTimeout === 'true',
        expiryTimeInMinute: configData?.expiryTimeInMinute ? +configData.expiryTimeInMinute : DEFAULT_EXPIRY_TIME,
        promptTimeBeforeIdleInMinute: configData?.promptTimeBeforeIdleInMinute
          ? +configData.promptTimeBeforeIdleInMinute
          : 1,
      };
      setConfig({...newConfig});
    }
  }, [configData]);

  return {config};
};

export default useConfig;
