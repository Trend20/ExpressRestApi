const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();

require("dotenv").config();
mongoose.set("strictQuery", true);

// use the middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// connect to the mongodb database
const db_uri = process.env.DATABASE_URI;
mongoose
  .connect(db_uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database successfully!");
  })
  .catch((error) => {
    console.log(error);
  });

// import the book router
const bookRouter = require("./routes/bookRoute");

// use the book router
app.use("/api/v1/books", bookRouter);

// initialize a port
const PORT = process.env.PORT || 5050;

// listen to the port
app.listen(PORT, () => {
  console.log("Application running successfully!");
});
