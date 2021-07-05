const express = require("express");
const connectDB = require("./config/connectDB");
const movieRouter = require("./routes/movie");
const app = express();

app.use(express.json());
connectDB();

app.use("/api/movie", movieRouter);

app.listen(4000, () => {
  console.log("server is connected on port 4000");
});
