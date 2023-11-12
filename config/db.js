const mongoose = require("mongoose");
require("dotenv").config();

// connect to the mongodb database
const db_uri = process.env.DATABASE_URI;
const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(db_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
