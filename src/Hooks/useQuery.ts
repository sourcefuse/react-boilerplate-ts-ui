import {QueryKey, useQuery as defaultUseQuery} from '@tanstack/react-query';
import {useSnackbar} from 'notistack';

function useQuery<T>({key, fn, options = {}}: {key: QueryKey; fn: () => Promise<T>; options?: any}) {
  const {enqueueSnackbar} = useSnackbar();
  return defaultUseQuery(key, fn, {
    ...options,
    onError: (e: Error | {error: Error}) => {
      let error = '';
      if (!e) {
        error = 'Something went wrong';
      } else if ('message' in e) {
        error = e.message;
      } else {
        error = e?.error?.message || '';
      }
      enqueueSnackbar(error || 'Something went wrong', {variant: 'error'});
    },
  });
}

export default useQuery;
