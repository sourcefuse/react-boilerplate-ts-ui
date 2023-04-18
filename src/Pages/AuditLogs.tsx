import {useQuery} from '@tanstack/react-query';
import axiosFactory from 'Helpers/axios';
import useConfig from 'Hooks/useConfig';
import {AuthContext} from 'Providers/AuthProvider';
import {useContext} from 'react';

type AuditLog = {
  id: string;
  action: string;
  actedOn: string;
  actionKey: string;
  before: {[key: string]: any};
};

type ApiAuditLog = {
  [key: string]: any;
};

const AuditLogsPage = () => {
  const {authApiBaseUrl} = useConfig().config;
  const {accessToken} = useContext(AuthContext).authData;

  const getAuditLogs = async (baseUrl: string): Promise<AuditLog[]> => {
    const client = axiosFactory(baseUrl);
    const logsResponse = await client.get<ApiAuditLog[]>('/audit-logs', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const logs: AuditLog[] = logsResponse.data.map((log: ApiAuditLog) => ({
      id: log.id,
      action: log.action,
      actedOn: log.actedOn,
      actionKey: log.actionKey,
      before: log.before,
    }));
    return logs;
  };

  const {
    data: auditLogs,
    isLoading,
    isError,
  } = useQuery(['audit-logs', authApiBaseUrl], () => getAuditLogs(authApiBaseUrl));

  if (isLoading) {
    return <div>Loading data...</div>;
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
