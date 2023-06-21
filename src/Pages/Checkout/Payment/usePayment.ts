// import useAxios from 'Hooks/useAxios';
// import useMutation from 'Hooks/useMutation';

// export default function usePayment(url: string) {
//   const client = useAxios(url);
//   const {mutateAsync: submitForm, isLoading} = useMutation({
//     fn: (values) => client.post(url, values),
//     successMsg: 'Form submitted',
//   });

//   return {
//     isLoading,
//     submitForm,
//   };
// }
export {};
