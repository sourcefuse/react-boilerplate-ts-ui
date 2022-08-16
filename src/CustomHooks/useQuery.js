import {useSnackbar} from 'notistack';
import {useQuery as defaultUseQuery} from 'react-query';

const useQuery = ({key, fn, options}) => {
  const {enqueueSnackbar} = useSnackbar();
  return defaultUseQuery(key, fn, {
    ...options,
    onError: (e) => {
      enqueueSnackbar(JSON.stringify(e.message), {variant: 'error'});
    },
  });
};

export default useQuery;
