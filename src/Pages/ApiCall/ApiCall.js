import CodeBlock from 'Components/CodeBlock/CodeBlock';
import PagePaper from 'Components/PagePaper';
import Table from 'Components/Table';
import useApiCall from './useApiCall';

const ApiCall = () => {
  const {data, isLoading} = useApiCall();
  return (
    <PagePaper title="API call">
      <Table
        isLoading={isLoading}
        columns={[
          {value: 'userId', label: 'User ID'},
          {value: 'id', label: 'ID'},
          {value: 'title', label: 'Title'},
          {value: 'body', label: 'Body'},
        ]}
        data={data}
      />
      <CodeBlock
        fullCode={`// ApiCall.js
import PagePaper from 'Components/PagePaper';
import Table from 'Components/Table';
import useApiCall from './useApiCall';

const ApiCall = () => {
  const {data} = useApiCall();
  return (
    <PagePaper title="API call">
      <Table
        isLoading={isLoading}
        columns={[
          {value: 'userId', label: 'User ID'},
          {value: 'id', label: 'ID'},
          {value: 'title', label: 'Title'},
          {value: 'body', label: 'Body'},
        ]}
        data={data}
      />
    </PagePaper>
  );
};

export default ApiCall;
        
// useApiCall.js
import useQuery from 'CustomHooks/useQuery';
import client from 'Helpers/axios';

export default function useApiCall() {
  const {data} = useQuery({
    key: 'api-call',
    fn: (values) => client.get('/posts?_limit=5', values),
  });

  return {
    data: data || [],
  };
}`}
      />
    </PagePaper>
  );
};

export default ApiCall;
