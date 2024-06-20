import axios from "axios";
import { TodoResponse, AddTodoParams } from "./types";

export const getTodo = async (): Promise<TodoResponse[]> => {
  const res = await axios.get<TodoResponse[]>(
    `http://localhost:4000/api/workouts`
  );
  return res.data;
};

export const AddTodo = async (params: AddTodoParams): Promise<TodoResponse> => {
  const res = await axios.post<TodoResponse>(
    `http://localhost:4000/api/workouts/`,
    {
      ...params,
    }
  );
  return res.data;
};

export const DeleteTodo = async (id: string): Promise<TodoResponse> => {
  const res = await axios.delete<TodoResponse>(
    `http://localhost:4000/api/workouts/${id}`
  );
  return res.data;
};

export const EditTodo = async (
  params: AddTodoParams,
  id: string
): Promise<TodoResponse> => {
  const res = await axios.patch<TodoResponse>(
    `http://localhost:4000/api/workouts/${id}`,
    {
      ...params,
    }
  );
  return res.data;
};
