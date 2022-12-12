import {getAppConfiguration} from 'Configuration';
import useAxiosPrivate from 'Hooks/useAxiosPrivate';
import useQuery from 'Hooks/useQuery';

const appConfig = getAppConfiguration();
export default function useMainLayout() {
  const client = useAxiosPrivate(appConfig.auth_api_base_url);
  const {data: userData, isLoading} = useQuery<{firstName: string; lastName: string}>({
    key: ['me'],
    fn: () => client.get('/auth/me'),
  });

  return {
    userData,
    isLoading,
  };
}
