const express = require('express');
const cors = require('cors');
const app = express();

// use the middleware
app.use(cors());
app.use(express.json());


// initialize a port
const PORT = process.env.PORT || 5050;

// listen to the port
app.listen(PORT, () =>{
  console.log('Application running successfully!');
});