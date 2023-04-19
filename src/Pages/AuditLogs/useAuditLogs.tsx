import useConfig from 'Hooks/useConfig';
import {ApiAuditLog, AuditLog} from './utils';
import axiosFactory from 'Helpers/axios';
import {useContext} from 'react';
import {AuthContext} from 'Providers/AuthProvider';
import {UseMutationResult, UseQueryResult, useMutation, useQuery} from '@tanstack/react-query';

export const useGetAuditLogs = (): UseQueryResult<AuditLog[], unknown> => {
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

  return useQuery(['audit-logs', authApiBaseUrl], () => getAuditLogs(authApiBaseUrl));
};

export const useCreateAuditLogs = (): UseMutationResult<void, unknown, ApiAuditLog> => {
  const {authApiBaseUrl} = useConfig().config;
  const {accessToken} = useContext(AuthContext).authData;

  const createAuditLogs = async (data: ApiAuditLog, baseUrl: string) => {
    const client = axiosFactory(baseUrl);
    await client.post('/audit-logs', data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };

  return useMutation(['audit-logs', authApiBaseUrl], (data: ApiAuditLog) => createAuditLogs(data, authApiBaseUrl));
};
