import * as config from './config.json';

export interface AppConfiguration {
  client_id: string;
  client_secret: string;
  audit_api_base_url: string;
  auth_api_base_url: string;
  app_api_base_url?: string;
}

export const getAppConfiguration = () => {
  return config as AppConfiguration;
};
