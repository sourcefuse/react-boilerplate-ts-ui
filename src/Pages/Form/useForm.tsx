import useMutation from 'CustomHooks/useMutation';
import client from 'Helpers/axios';

export default function useForm() {
  const {mutateAsync, isLoading} = useMutation({
    fn: (values) => client.post(`/posts`, values),
    successMsg: 'Form submitted',
  });

  const submitForm = async ({salutation, hobby, ...rest}) => {
    const data: any = {
      ...rest,
      salutation: salutation?.value,
      hobby: [],
    };
    hobby.forEach((hob: any) => data.hobby.push(hob?.value));
    await mutateAsync(data);
  };

  return {
    isLoading,
    submitForm,
  };
}
