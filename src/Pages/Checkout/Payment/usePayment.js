import client from 'Helpers/axios';
import useMutation from 'Hooks/useMutation';

export default function usePayment(url) {
  const {mutateAsync: submitForm, isLoading} = useMutation({
    fn: (values) => client.post(url, values),
    successMsg: 'Form submitted',
  });

  return {
    isLoading,
    submitForm,
  };
}
