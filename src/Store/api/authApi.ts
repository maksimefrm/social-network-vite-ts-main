import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IGetUserResponce } from './types'
import { IRegisterUser } from './types'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://161.35.153.209:5430/api' }),
  endpoints: (builder) => ({
    getUser: builder.query<IGetUserResponce, string>({
      query: (user_id) => `user?user_id=${user_id}`,
    }),
    loginUser: builder.mutation<any, any>({
      query: (loginData) => ({
        url: "/login",
        method: "POST",
        body: loginData,
      }),
    }),
    registerUser: builder.mutation<IRegisterUser, any>({
      query: (registerData) => ({
        url: "/registration",
        method: "POST",
        body: registerData,
      }),
    }),
}),
})

export const { useGetUserQuery, useLoginUserMutation, } = authApi