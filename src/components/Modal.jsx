import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { addItem } from "../slices/listItems";
function MovieModal({ movie }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [items, setItems] = React.useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="m-1 btn btn-primary rounded-circle"
        onClick={handleShow}
      >
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-light ">
          <Modal.Title>Create new List</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light  p-3">
          <form action="" className="d-flex ">
            <input
              className="form-control  "
              type="text"
              onChange={(event) => {
                setItems(event.target.value);
              }}
            />
            <button
              type="button"
              className="btn bg-light border "
              onClick={() => dispatch(addItem({ id: nanoid(), title: items }))}
            >
              +
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer className="bg-light ">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MovieModal;
