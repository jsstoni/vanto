import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Columns, Subtask, Tasks } from "@/utils/constant/tasks";

export const boardService = createApi({
  reducerPath: "board_api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (builder) => ({
    // get tasks from api
    getTasks: builder.query<Tasks[], null>({ query: () => "/board" }),

    // post tasks from api
    createTask: builder.mutation<Tasks, Partial<Tasks>>({
      query: (created) => ({ url: "/board", method: "POST", body: created }),
    }),

    //put tasks from api
    setColumn: builder.mutation<Tasks, { id: number; column: Columns }>({
      query: (updated) => ({ url: "/board", method: "PUT", body: updated }),
    }),

    //post subtask from api
    addSubtask: builder.mutation<Subtask[], Partial<Subtask[]>>({
      query: (created) => ({
        url: `/subtask`,
        method: "POST",
        body: created,
      }),
    }),

    //delete subtask from api
    rmSubtask: builder.mutation<Subtask, number>({
      query: (id) => ({
        url: `/subtask?id=${id}`,
        method: "DELETE",
      }),
    }),

    //put subtask from api
    putSubtask: builder.mutation<Subtask, { id: number; check: boolean }>({
      query: (data) => ({
        url: `/subtask?id=${data.id}`,
        method: "PUT",
        body: { check: data.check },
      }),
    }),

    //put log from api
    putLog: builder.mutation<Tasks, { counter: number; id: number }>({
      query: (data) => ({
        url: `/board/log`,
        method: "PUT",
        body: { counter: data.counter, id: data.id },
      }),
    }),
  }),
});

export const {
  useGetTasksQuery,
  useCreateTaskMutation,
  useSetColumnMutation,
  useAddSubtaskMutation,
  useRmSubtaskMutation,
  usePutSubtaskMutation,
  usePutLogMutation,
} = boardService;
