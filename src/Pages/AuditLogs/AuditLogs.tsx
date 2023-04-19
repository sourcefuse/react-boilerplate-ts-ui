import {Box, CircularProgress} from '@mui/material';
import {useGetAuditLogs} from './useAuditLogs';

const AuditLogsPage = () => {
  const {data: auditLogs, isLoading, isError} = useGetAuditLogs();

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
    <div>
      <h1>Audit Logs</h1>
      <ul>
        {auditLogs.map((item) => (
          <li key={item.id}>{JSON.stringify(item, null, 2)}</li>
        ))}
      </ul>
    </div>
  );
};

export default AuditLogsPage;
