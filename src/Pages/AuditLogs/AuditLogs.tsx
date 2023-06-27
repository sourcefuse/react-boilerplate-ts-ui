import {Box, CircularProgress} from '@mui/material';
import {Table} from 'Components/Table';
import {auditColumns} from './utils';
import {useGetLogsQuery} from './auditLogsApiSlice';

const AuditLogsPage = () => {
  const {data: auditLogs, isLoading, isError} = useGetLogsQuery();

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return <div>Error loading data.</div>;
  }

  return (
    <Box sx={{margin: 5}}>
      <Table data={auditLogs!} columns={auditColumns} enableGlobalFiltering />
    </Box>
  );
};

export default AuditLogsPage;
