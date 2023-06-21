// import axiosFactory from 'Helpers/axios';
// import {FormI} from './utils';
// import {useMutation} from '@tanstack/react-query';
// const axios = axiosFactory();
// export default function useForm() {
//   const {mutateAsync, isLoading} = useMutation({
//     fn: (values: any) => axios.post(`/posts`, values),
//     successMsg: 'Form submitted',
//   });

//   const submitForm = async ({salutation, hobby, ...rest}: FormI) => {
//     const data: any = {
//       ...rest,
//       salutation: salutation?.value,
//       hobby: [],
//     };
//     hobby.forEach((hob: any) => data.hobby.push(hob?.value));
//     await mutateAsync(data);
//   };

//   return {
//     isLoading,
//     submitForm,
//   };
// }
export {};
