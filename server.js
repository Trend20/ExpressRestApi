const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();

// connect to the mongodb database
const db_uri = process.env.DATABASE_URI;
mongoose.connect(db_uri, {useNewUrlParser: true})
        .then(() => {
          console.log('Connected to the database successfully!')
        })
        .catch((error) => {
          console.log(error)
        })

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