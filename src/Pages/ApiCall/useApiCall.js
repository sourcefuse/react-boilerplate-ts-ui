import useQuery from 'CustomHooks/useQuery';
import client from 'Helpers/axios';

export default function useApiCall() {
  const {data, isLoading} = useQuery({
    key: 'api-call',
    fn: (values) => client.get('/posts?_limit=5', values),
  });

  return {
    data: data || [],
    isLoading,
  };
}
