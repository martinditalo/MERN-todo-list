export interface TodoResponse {
  _id: string;
  title: string;
  reps: string;
  load: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface AddTodoParams {
  title: string;
  reps: string;
  load: string;
}

export interface TodoResponse {
  status: number;
  data: {};
}
