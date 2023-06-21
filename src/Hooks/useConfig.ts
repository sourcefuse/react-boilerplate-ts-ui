export interface AppConfiguration {
  clientId: string;
  authApiBaseUrl: string;
  appApiBaseUrl?: string;
  enableSessionTimeout: boolean;
  storageSessionTimeKey?: string;
  expiryTimeInMinute: number;
  warningAlertTimeoutInMinute: number;
}

const useConfig = () => {
  const {
    VITE_CLIENT_ID,
    VITE_APP_API_BASE_URL,
    VITE_AUTH_API_BASE_URL,
    VITE_ENABLE_SESSION_TIMEOUT,
    VITE_STORAGE_SESSION_TIME_KEY,
    VITE_EXPIRY_TIME_IN_MINUTE,
    VITE_WARNING_ALERT_TIMEOUT_IN_MINUTE,
  } = import.meta.env;

  const config: AppConfiguration = {
    clientId: VITE_CLIENT_ID as string,
    authApiBaseUrl: VITE_AUTH_API_BASE_URL,
    appApiBaseUrl: VITE_APP_API_BASE_URL,
    enableSessionTimeout: VITE_ENABLE_SESSION_TIMEOUT === 'true',
    storageSessionTimeKey: VITE_STORAGE_SESSION_TIME_KEY,
    expiryTimeInMinute: VITE_EXPIRY_TIME_IN_MINUTE ? +VITE_EXPIRY_TIME_IN_MINUTE : 1,
    warningAlertTimeoutInMinute: VITE_WARNING_ALERT_TIMEOUT_IN_MINUTE ? +VITE_WARNING_ALERT_TIMEOUT_IN_MINUTE : 1,
  };

  return {config};
};

export default useConfig;
