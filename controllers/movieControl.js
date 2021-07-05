const movie = require("../models/Movie");
exports.addMovie = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  try {
    const newMovie = new movie(req.body);
    const findTitle = await movie.find({ title: req.body.title });

    if (findTitle) {
      return res.status(400).send("this movie already exists");
    }
    await newMovie.save();
    res.send({ message: "the movie is added", newMovie });
  } catch (error) {
    res.status(500).send("server error");
  }
};
