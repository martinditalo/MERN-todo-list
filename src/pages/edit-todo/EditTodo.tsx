import type { AddTodoParams, TodoResponse } from "../../api/types";
import { ReactElement, useState } from "react";
import PopUpModal from "../../components/Modal";
import { Button, FloatingLabel, Form, Stack } from "react-bootstrap";
import { useEditUser } from "../../mutations";

interface EditTodoProps {
  data: TodoResponse;
  sendDataToParent: (data: boolean) => void;
  isUpdated?: boolean;
}
const EditTodo = (props: EditTodoProps): ReactElement => {
  const { data, sendDataToParent, isUpdated } = props;
  const [visible, setVisible] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [load, setLoad] = useState<string>("");
  const [reps, setReps] = useState<string>("");
  const editTodo = useEditUser(data._id);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const AddTodoParams: AddTodoParams = {
    load: load === "" ? data.load : load,
    reps: reps === "" ? data.reps : reps,
    title: title === "" ? data.title : title,
  };
  const editData = () => {
    editTodo.mutate(AddTodoParams, {
      onSuccess: () => {
        hideModal();
        sendDataToParent(!isUpdated);
        setLoad("");
        setReps("");
        setTitle("");
      },
    });
  };

  return (
    <>
      <Button onClick={showModal}>Edit</Button>
      <PopUpModal title="Edit Todo workout" open={visible} onExited={hideModal}>
        <Stack className="mt-3 mb-3 mx-3">
          <FloatingLabel label={data.title} className="mb-3">
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </FloatingLabel>
          <FloatingLabel label={data.load} className="mb-3">
            <Form.Control
              type="text"
              value={load}
              onChange={(e) => {
                setLoad(e.target.value);
              }}
            />
          </FloatingLabel>
          <FloatingLabel label={data.reps} className="mb-3">
            <Form.Control
              type="text"
              value={reps}
              onChange={(e) => {
                setReps(e.target.value);
              }}
            />
          </FloatingLabel>
          <Button onClick={editData}>Edit</Button>
        </Stack>
      </PopUpModal>
    </>
  );
};

export default EditTodo;
