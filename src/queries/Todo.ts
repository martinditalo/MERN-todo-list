import { useQuery } from "react-query";
import { getTodo } from "../api/Todo";
import { TodoResponse } from "../api/types";

export const useGetTodo = () => {
  return useQuery<TodoResponse[], Error>(["getTodo"], () => getTodo());
};
