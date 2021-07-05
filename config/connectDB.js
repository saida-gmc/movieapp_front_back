const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://saida:saida123456@cluster0.lp9rm.mongodb.net/movieDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("data base connected");
  } catch (error) {
    console.log({ message: "data bas connot connect", error });
  }
};
module.exports = connectDB;
