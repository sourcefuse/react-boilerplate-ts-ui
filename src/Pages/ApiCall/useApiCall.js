import client from 'Helpers/axios';
import useQuery from 'Hooks/useQuery';

export default function useApiCall() {
  const {data, isLoading} = useQuery({
    key: ['api-call'],
    fn: (values) => client.get('/posts?_limit=5', values),
  });

  return {
    data: data || [],
    isLoading,
  };
}
