import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const yandexApi = createApi({
  reducerPath: 'yandexApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://oauth.yandex.ru/' }),
  endpoints: (builder) => ({
    getToken: builder.mutation<any, { code: string }>({
      query: ({ code }) => ({
        url: 'token',
        method: 'POST',
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          client_id: 'd8d071002ccd49aa9d8973f60e33d200',
          client_secret: '9bf85e84ac3049639fbda9f61cec4ba2',
          code,
        }).toString(),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }),
    }),
  }),
});

export const { useGetTokenMutation } = yandexApi;
