import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IGetUserResponce, ILoginUserPayload, ILoginUserResponce, IRegisterUserResponce, IRegisterUserPayload } from './types'
import { baseUrl } from '../../utils/baseUrl'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getUser: builder.query<IGetUserResponce, string>({
      query: (user_id) => `user?user_id=${user_id}`,
    }),
    loginUser: builder.mutation<ILoginUserResponce, ILoginUserPayload>({
      query: (loginData) => ({
        url: "/login",
        method: "POST",
        body: loginData,
      }),
    }),
    registerUser: builder.mutation<IRegisterUserResponce, IRegisterUserPayload>({
      query: (registerData) => ({
        url: "/registration",
        method: "POST",
        body: registerData,
      }),
    }),
}),
})

export const { useGetUserQuery, useLoginUserMutation, useRegisterUserMutation } = authApi