import type { ReactElement } from "react";
import { useDeleteTodo } from "../../mutations";
import { Button } from "react-bootstrap";
interface DeleteProps {
  id: string;
  sendDataToParent: (data: boolean) => void;
  isUpdated?: boolean;
}
const DeleteTodo = (props: DeleteProps): ReactElement => {
  const { id, sendDataToParent, isUpdated } = props;
  const deleteTodo = useDeleteTodo(id);
  const deleteData = () => {
    deleteTodo.mutate(id, {
      onSuccess: () => {
        sendDataToParent(!isUpdated);
      },
    });
  };
  return (
    <>
      <Button onClick={deleteData} variant="danger">
        X
      </Button>
    </>
  );
};

export default DeleteTodo;
