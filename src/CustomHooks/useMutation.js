import {useSnackbar} from 'notistack';
import {useMutation as defaultUseMutation} from 'react-query';

const useMutation = ({fn, successMsg}) => {
  const {enqueueSnackbar} = useSnackbar();
  return defaultUseMutation(fn, {
    onError: (e) => {
      enqueueSnackbar(JSON.stringify(e?.message), {variant: 'error'});
    },
    onSuccess: (e) => {
      if (successMsg) {
        enqueueSnackbar(successMsg, {variant: 'success'});
      }
    },
  });
};

export default useMutation;
