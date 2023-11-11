const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

const bookRouter = require("./routes/bookRoute");

require("dotenv").config();

// use the middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/v1/books", bookRouter);

module.exports = app;
