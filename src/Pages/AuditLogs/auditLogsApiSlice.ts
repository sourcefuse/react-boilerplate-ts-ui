import {apiSlice} from 'redux/apiSlice';
import {AuditLog} from './utils';

export const auditLogsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getLogs: builder.query<AuditLog[], void>({
      query: () => ({url: '/audit-logs'}),
    }),
    createLogs: builder.mutation({
      query: (auditLog: AuditLog) => ({
        url: '/audit-logs',
        method: 'POST',
        body: {...auditLog},
      }),
    }),
  }),
});

export const {useGetLogsQuery, useCreateLogsMutation} = auditLogsApiSlice;
