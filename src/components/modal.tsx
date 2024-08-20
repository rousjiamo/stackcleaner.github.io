import { Modal } from "react-bootstrap";
import { Repay } from "./actions/Repay";
// import "./modal.scss";

export const ClosePosition = ({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: () => void;
}) => {
  return (
    <Modal show={show} onHide={handleClose} style={{ borderRadius: "2px" }}>
      <Modal.Header closeButton className="px-4 py-3">
        <Modal.Title className="m16">Close position</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4 px24y12">
        <Repay />
      </Modal.Body>
    </Modal>
  );
};
