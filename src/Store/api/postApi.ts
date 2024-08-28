import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { ICreatePostsPayload, ICreatePostsResponce, IDeletePostsResponce, IGetAllPostsResponce, IGetPostByIdResponce, IUpdatePostsPayload, IUpdatePostsResponce } from './types'
import { baseUrl } from '../../utils/constants'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPostById: builder.query<IGetPostByIdResponce, string>({
      query: (post_id) =>`/post?post_id=${post_id}`,
    }),
    getAllPost: builder.query<IGetAllPostsResponce, null>({
        query: () =>"/post",
    }),
    createPost: builder.mutation<ICreatePostsResponce, ICreatePostsPayload>({
        query: (post_data) => ({
            url: "/post",
            method: "POST",
            body: post_data
        }),
    }),
    updatePost: builder.mutation<IUpdatePostsResponce, IUpdatePostsPayload>({
        query: (updated_data) => ({
            url: "/post",
            method: "PUT",
            body: updated_data
        }),
    }),
    deletePost: builder.mutation<IDeletePostsResponce, string>({
        query: (post_id) => ({
            url: `/post?post_id=${post_id}`,
            method: "DELETE",
        }),
    }),
}),
})

export const { 
    useGetAllPostQuery, 
    useGetPostByIdQuery, 
    useCreatePostMutation, 
    useDeletePostMutation, 
    useUpdatePostMutation,
    useLazyGetAllPostQuery,
    useLazyGetPostByIdQuery

} = postApi