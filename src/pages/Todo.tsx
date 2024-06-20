import { ReactElement, useEffect, useState } from "react";
import { useGetTodo } from "../queries/Todo";
import { AddTodo } from "./add-todo";
import { DeleteTodo } from "./delete-todo";
import { styles } from "./styles";
import { EditTodo } from "./edit-todo";

const Todo = (): ReactElement => {
  const [IsUpdated, setIsUpdated] = useState<boolean>(false);
  const getTodo = useGetTodo();
  const { refetch } = getTodo;
  const handleDataFromChild = (data: boolean) => {
    setIsUpdated(data);
  };
  useEffect(() => {
    refetch();
  }, [IsUpdated, refetch]);
  console.log("test", IsUpdated);

  return (
    <>
      <div
        style={{
          marginTop: "5rem",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div>
          <h1 style={{ textAlign: "center" }}>Todo Workout</h1>
          {getTodo?.data?.map((data) => (
            <div key={data._id} style={styles}>
              <span style={{ width: "8rem" }}>Title: {data.title}</span>
              <span>Load: {data.load}</span>
              <span>Reps: {data.reps}</span>
              <EditTodo
                sendDataToParent={handleDataFromChild}
                isUpdated={IsUpdated}
                data={data}
              />
              <DeleteTodo
                sendDataToParent={handleDataFromChild}
                isUpdated={IsUpdated}
                id={data._id}
              />
            </div>
          ))}
          <AddTodo
            sendDataToParent={handleDataFromChild}
            isUpdated={IsUpdated}
          />
        </div>
      </div>
    </>
  );
};

export default Todo;
