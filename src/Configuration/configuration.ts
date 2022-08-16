import * as config from './config.json';

export interface OidcConfiguration {
  client_id: string;
  redirect_uri: string;
  response_type: string;
  post_logout_redirect_uri: string;
  scope: string;
  authority: string;
  silent_redirect_uri: string;
  automaticSilentRenew: string;
  loadUserInfo: string;
}

export const getOidcConfiguration = () => {
  return config as OidcConfiguration;
};
