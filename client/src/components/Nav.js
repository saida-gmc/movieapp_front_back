import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { addMovie } from "../redux/action/actions";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: "",
    duration: "",
    date: null,
    poster: "",
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const change = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  const handleAdd = () => {
    dispatch(addMovie(newMovie));
    handleClose();
  };
  return (
    <div>
      <h1>movie app</h1>
      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>title</label>
          <input
            type="text"
            name="title"
            placeholder="enter"
            onChange={(e) => change(e)}
          />
          <label>duration</label>
          <input
            type="text"
            name="duration"
            placeholder="enter"
            onChange={(e) => change(e)}
          />
          <label>date</label>
          <input
            type="text"
            name="date"
            placeholder="enter"
            onChange={(e) => change(e)}
          />
          <label>poster</label>
          <input
            type="text"
            name="poster"
            placeholder="enter"
            onChange={(e) => change(e)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Nav;
