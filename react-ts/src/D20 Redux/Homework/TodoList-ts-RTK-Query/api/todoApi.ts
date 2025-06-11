import { api, BASE_URL } from "./api"
import type { TodoItem } from "../components/TodoItem"
// ![note] import the react specific entry point that automatically generates
// ! hooks corresponding to the defined endpoints
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// *[note]
// createApi: core function to create an API slice
//   reducerPath: unique key where RTKQ will store its cache data in Redux store
//   baseQuery: function to define how to fetch data
//     fetchBaseQuery: a wrapper around fetch()
//   tagTypes: declares tag types for cache invalidation
//   endpoints: defines the API endpoints and their operations
//     builder.query<ReturnType, QueryArgType>: GET request
//       query: function that returns the endpoint URL
//       providesTags: tags to associate with the data fetched by this query
//       transformResponse: function to transform the response data before returning it
//     builder.mutation: for operations that change data: POST, PUT, DELETE requests
//       method: HTTP method for the request
//       invalidatesTags: tells RTKQ to refetch any queries that provide the specified tags
export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Todo"],
  endpoints: (builder) => ({
    getTodos: builder.query<TodoItem[], void>({
      query: () => api.getAll(),
      providesTags: ["Todo"],
      // * granular cache invalidation (didn't implement, reason at line 59)
      // providesTags: (result) =>
      //   result
      //     ? [
      //         { type: "Todo", id: "LIST" },
      //         ...result.map(({ id }) => ({ type: "Todo" as const, id })),
      //       ]
      //     : [{ type: "Todo", id: "LIST" }],
      // [note] Moved sorting from backend to frontend to keep it simple.
      // transformResponse: (response: TodoItem[]) => {
      //   return sortTodo(response)
      // },
    }),
    deleteTodo: builder.mutation<TodoItem, string>({
      query: (todoId) => ({
        url: api.delete(todoId),
        method: "DELETE",
      }),
      invalidatesTags: ["Todo"],
    }),
    toggleTodo: builder.mutation<TodoItem, { id: string; completed: boolean }>({
      query: ({ id, completed }) => ({
        url: api.update(id),
        method: "PATCH",
        body: { completed }, // what to update
      }),
      invalidatesTags: ["Todo"],
      // * granular cache invalidation (didn't implement)
      // does't quiet make sense here since we have sorting on the backend,
      // so toggle any item have to re-fetch the whole list anyway.
      // it might be more usefull for fetching individual item form API, but this
      // feature is not covered in this project.
      // invalidatesTags: (result, error, { id }) => [
      //   { type: "Todo", id },
      //   { type: "Todo", id: "LIST" },
      // ],
    }),
  }),
})

//*[note] RTK Query's React integration will automatically generate
// React hooks for every endpoint we define
export const { useGetTodosQuery, useDeleteTodoMutation, useToggleTodoMutation } = todoApi
