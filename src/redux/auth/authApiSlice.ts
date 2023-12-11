import {apiSlice} from '../apiSlice';
import {User} from './user.model';

export interface ILoginForm {
  email: string;
  password: string;
}

export interface ICredentials extends ILoginForm {
  client_id: string;
}

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: (credentials: ICredentials) => ({
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
