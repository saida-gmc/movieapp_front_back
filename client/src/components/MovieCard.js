import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { editMovie, deleteMovie } from "../redux/action/actions";
import { useDispatch } from "react-redux";
const MovieCard = ({ movie }) => {
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
  const handleEdit = () => {
    dispatch(editMovie(movie._id, newMovie));
    handleClose();
  };
  const handleDelete = () => {
    dispatch(deleteMovie(movie._id));
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.poster} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.duration}</Card.Text>
        <Button variant="primary" onClick={handleDelete}>
          delete
        </Button>
        <Button variant="primary" onClick={handleShow}>
          Edit
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Edit movie</Modal.Title>
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
              value={movie.date}
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
            <Button variant="primary" onClick={handleEdit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
