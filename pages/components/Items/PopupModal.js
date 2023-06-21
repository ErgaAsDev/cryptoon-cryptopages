import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Link from "next/link";

function PopupModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Registration Successful
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Your registration has been submitted successfully.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>
          <Link href="/Dashboard">Go to Dashboard</Link>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PopupModal;
