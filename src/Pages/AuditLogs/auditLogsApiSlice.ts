import {apiSlice} from 'redux/apiSlice';
import {ApiAuditLog} from './utils';

export const auditLogsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLogs: builder.query<ApiAuditLog[], void>({
      query: () => ({url: '/audit-logs'}),
    }),
    createLogs: builder.mutation({
      query: (auditLog: ApiAuditLog) => ({
        url: '/audit-logs',
        method: 'POST',
        body: {...auditLog},
      }),
    }),
  }),
});

export const {useGetLogsQuery, useCreateLogsMutation} = auditLogsApiSlice;
