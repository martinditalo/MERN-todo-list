import { ReactNode } from "react";
import Modal from "react-bootstrap/Modal";

type ModalProps = {
  open: boolean;
  title?: string;
  children: ReactNode;
  onExited: () => void;
};
const PopUpModal = (props: ModalProps) => {
  const { children, onExited, open, title } = props;

  return (
    <>
      <Modal show={open} onHide={onExited}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        {children}
      </Modal>
    </>
  );
};

export default PopUpModal;
