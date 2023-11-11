const connectDB = require("./config/db.js");
const app = require("./app");
require("dotenv").config();

// database connection
connectDB();

// initialize a port
const PORT = process.env.PORT || 5050;

// listen to the port
app.listen(PORT, () => {
  console.log("Application running successfully!");
});
