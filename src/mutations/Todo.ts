import type { AddTodoParams, TodoResponse } from "../api/types";
import { useMutation } from "react-query";
import { AxiosError } from "axios";
import { AddTodo, DeleteTodo, EditTodo } from "../api/Todo";

export const useAddTodo = () => {
  return useMutation<TodoResponse, AxiosError, AddTodoParams>(
    "addTodo",
    (params) => AddTodo(params)
  );
};

export const useEditUser = (id: string) => {
  return useMutation<TodoResponse, AxiosError, AddTodoParams>(
    "EditTodo",
    (params) => EditTodo(params, id)
  );
};

export const useDeleteTodo = (id: string) => {
  return useMutation<TodoResponse, AxiosError, string>("deleteTodo", () =>
    DeleteTodo(id)
  );
};
