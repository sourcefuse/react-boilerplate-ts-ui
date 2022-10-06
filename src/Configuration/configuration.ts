import * as config from './config.json';
import * as devConfig from './devConfig.json';

export interface AppConfiguration {
  azure_client_id: string;
  azure_client_secret: string;
  audit_api_base_url: string;
  auth_api_base_url: string;
  app_api_base_url?: string;
}

export const getAppConfiguration = () => {
  return process.env.REACT_APP_ENVIRONMENT === 'dev' ? (devConfig as AppConfiguration) : (config as AppConfiguration);
};
