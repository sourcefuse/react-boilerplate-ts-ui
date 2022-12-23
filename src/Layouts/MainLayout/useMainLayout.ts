import useAxios from 'Hooks/useAxios';
import useConfig from 'Hooks/useConfig';
import useQuery from 'Hooks/useQuery';

export default function useMainLayout() {
  const {
    config: {authApiBaseUrl},
  } = useConfig();
  const client = useAxios(authApiBaseUrl);
  const {data: userData, isLoading} = useQuery<{firstName: string; lastName: string}>({
    key: ['me'],
    fn: () => client.get(`/auth/me`),
    options: {
      enabled: !!authApiBaseUrl,
    },
  });

  return {
    userData,
    isLoading,
  };
}
