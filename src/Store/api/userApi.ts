import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IGetSubscribersResponce, ISubscriber } from "./types"
import { jsonPlaceholderUrl } from '../../utils/constants'

export const subscribersApi = createApi({
  reducerPath: 'subscribersApi',
  baseQuery: fetchBaseQuery({ baseUrl: jsonPlaceholderUrl }),
  endpoints: (builder) => ({
    getSubscribers: builder.query<IGetSubscribersResponce, null>({
      query: () => `/users`,
    }),
    getSubscriberById: builder.query<ISubscriber, null>({
        query: (subscriber_id) => `/users/${subscriber_id}`,
      }),
    

}),
})

export const { useGetSubscriberByIdQuery, useGetSubscribersQuery,useLazyGetSubscriberByIdQuery, useLazyGetSubscribersQuery } = subscribersApi