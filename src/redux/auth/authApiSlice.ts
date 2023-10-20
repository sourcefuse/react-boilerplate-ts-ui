import {apiSlice} from '../apiSlice';
import {User} from './user.model';

export type LoginForm = {email: string; password: string};
type credentials = LoginForm & {
  client_id: string;
};

export const authApiSlice = apiSlice.injectEndpoints({
  // eslint-disable-next-line prettier/prettier
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials: credentials) => ({
        url: '/auth/login-token',
        method: 'POST',
        body: {...credentials},
      }),
    }),
    logout: builder.mutation({
      query: (refreshToken: string | null) => ({
        url: '/logout',
        method: 'POST',
        body: {refreshToken},
      }),
    }),
    getUser: builder.query<User, void>({
      query: () => ({url: '/auth/me'}),
    }),
  }),
});

export const {useLoginMutation, useLogoutMutation, useGetUserQuery} = authApiSlice;
