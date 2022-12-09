import {MutationFunction, useMutation as defaultUseMutation} from '@tanstack/react-query';
import {useSnackbar} from 'notistack';

function useMutation<T, U>({fn, successMsg}: {fn: MutationFunction<T, U>; successMsg?: string}) {
  const {enqueueSnackbar} = useSnackbar();
  return defaultUseMutation(fn, {
    onError: (e: any) => {
      enqueueSnackbar(e?.message || e?.error?.message || 'Something went wrong', {variant: 'error'});
    },
    onSuccess: () => {
      if (successMsg) {
        enqueueSnackbar(successMsg, {variant: 'success'});
      }
    },
  });
}

export default useMutation;
