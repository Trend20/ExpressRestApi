const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// import the book router
const bookRouter = require('./routes/books');

// use the middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// use the book router
app.use('/book', bookRouter);



// initialize a port
const PORT = process.env.PORT || 5050;

// listen to the port
app.listen(PORT, () =>{
  console.log('Application running successfully!');
});