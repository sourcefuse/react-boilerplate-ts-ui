import * as config from './config.json';

export interface AppConfiguration {
  client_id: string;
  client_secret: string;
  audit_api_base_url?: string;
  auth_api_base_url: string;
  app_api_base_url?: string;
  enable_session_timeout?: boolean;
  storage_session_time_key?: string;
  expiry_time_in_minute?: number;
  warning_alert_timeout_in_minute?: number;
}

export const getAppConfiguration = () => {
  return config as AppConfiguration;
};
