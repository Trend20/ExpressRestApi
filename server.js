const app = require("./app");

// get port form .ENV
const PORT = process.env.PORT || 5050;

// listen to the port
app.listen(PORT, () => {
  console.log("Application running successfully!");
});
