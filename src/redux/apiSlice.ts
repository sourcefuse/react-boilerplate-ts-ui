import type {BaseQueryFn, FetchArgs, FetchBaseQueryError} from '@reduxjs/toolkit/query';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {AuthData, setCredentials, unsetCredentials} from './auth/authSlice';
import {RootState} from './store';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_AUTH_API_BASE_URL,
  prepareHeaders(headers, {getState}) {
    const token = (getState() as RootState).auth.accessToken;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

/**
 * Base query function with re-Authentication handling and header preparation.
 * This function serves as an interceptor for API requests.
 *
 * @param args - The fetch arguments for the request.
 * @param api - The API object provided by `createApi`.
 * @param extraOptions - Extra options for the query.
 */
const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // try to get a new token
    console.log('sending refresh token....');
    const refreshResult = await baseQuery(
      {
        url: '/auth/token-refresh',
        method: 'POST',
        body: {refreshToken: (api.getState() as RootState).auth.refreshToken},
      },
      api,
      extraOptions,
    );
    if (refreshResult.data) {
      // store the new token
      api.dispatch(setCredentials(refreshResult.data as AuthData));
      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(unsetCredentials());
    }
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
