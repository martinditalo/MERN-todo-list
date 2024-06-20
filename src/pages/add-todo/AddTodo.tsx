import type { AddTodoParams } from "../../api/types";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { ReactElement, useState } from "react";
import { useAddTodo } from "../../mutations/Todo";
import { FloatingLabel, Stack } from "react-bootstrap";

interface AddTodoProps {
  sendDataToParent: (data: boolean) => void;
  isUpdated?: boolean;
}

const AddTodo = (props: AddTodoProps): ReactElement => {
  const { sendDataToParent, isUpdated } = props;
  const [title, setTitle] = useState<string>("");
  const [load, setLoad] = useState<string>("");
  const [reps, setReps] = useState<string>("");

  const AddTodo = useAddTodo();
  const AddTodoParams: AddTodoParams = {
    load: load,
    reps: reps,
    title: title,
  };
  const Submit = () => {
    AddTodo.mutate(AddTodoParams, {
      onSuccess: (data) => {
        console.log(data);
        sendDataToParent(!isUpdated);
        setLoad("");
        setReps("");
        setTitle("");
      },
    });
  };

  return (
    <>
      <Stack>
        <Stack className="mt-3">
          <FloatingLabel label="Title" className="mb-3">
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </FloatingLabel>
          <FloatingLabel label="Load" className="mb-3">
            <Form.Control
              type="number"
              value={load}
              onChange={(e) => {
                setLoad(e.target.value);
              }}
            />
          </FloatingLabel>
          <FloatingLabel label="Reps" className="mb-3">
            <Form.Control
              type="number"
              value={reps}
              onChange={(e) => {
                setReps(e.target.value);
              }}
            />
          </FloatingLabel>
        </Stack>
        <Button variant="primary" onClick={Submit}>
          Add
        </Button>
      </Stack>
    </>
  );
};
export default AddTodo;
