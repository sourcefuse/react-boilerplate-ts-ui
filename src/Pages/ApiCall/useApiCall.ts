// import useAxios from 'Hooks/useAxios';
// import useQuery from 'Hooks/useQuery';

// interface Data {
//   userId: string;
//   id: string;
//   title: string;
//   body: string;
// }

// export default function useApiCall() {
//   const client = useAxios('');
//   const {data, isLoading} = useQuery<{data: Data[]}>({
//     key: ['api-call'],
//     fn: () => client.get('/posts?_limit=5'),
//   });

//   return {
//     data: data?.data || ([] as Data[]),
//     isLoading,
//   };
// }
export {};
