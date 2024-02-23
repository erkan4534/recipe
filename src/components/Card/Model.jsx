import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import classes from "./Model.module.css";

function Model(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { name, instructions, img, children } = props;

  return (
    <div>
      <Button className={`${classes.detail}`} onClick={handleShow}>
        {children}
      </Button>

      <Modal size="lg" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={`${classes.modalBodyInside}`}>
            <p>{instructions}</p>
            <img src={img} alt="image" />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button className={`${classes.detail}`} onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

Model.propTypes = {
  children: PropTypes.string,
  instructions: PropTypes.string,
  name: PropTypes.string,
  img: PropTypes.string,
};

export default Model;
