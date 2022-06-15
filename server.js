const express = require('express');

const app = express();


// initialize a port
const PORT = process.env.PORT || 5050;

// listen to the port
app.listen(PORT, () =>{
  console.log('Application running successfully!');
});