const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const addMovie = require("../controllers/movieControl");
const movie = require("../models/Movie");
//testing route
router.get("/", (req, res) => {
  res.send("welcome to the movie app");
});
//[body("title").isLength({ min: 5 })],
//post
router.post(
  "/",
  [body("title", "title must contain more than 5 chars").isLength({ min: 5 })],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const newMovie = new movie(req.body);
      const findTitle = await movie.findOne({ title: req.body.title });
      if (findTitle) {
        return res.status(400).send("this movie already exists");
      }
      await newMovie.save();
      res.send({ message: "the movie is added", newMovie });
    } catch (error) {
      res.status(500).send("server error");
      console.log(error);
    }
  }
);

//get all
router.get("/all", async (req, res) => {
  try {
    const allMovies = await movie.find();
    res.send( allMovies 
    );
  } catch (error) {
    res.status(500).send("server error");
  }
});

//delete
router.delete("/:id", async (req, res) => {
  try {
    await movie.deleteOne({ _id: req.params.id });
    res.send({ mesage: "the movie is deleted" });
  } catch (error) {
    res.status(500).send("server error");
  }
});
//update
router.put("/:id", async (req, res) => {
  try {
    await movie.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ mesage: "the movie is updated" });
  } catch (error) {
    res.status(500).send("server error");
  }
});

module.exports = router;
