const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  date: {
    type: Number,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
});
module.exports = model("movie", movieSchema);
//"movie":collection name, movieSchema schema name
