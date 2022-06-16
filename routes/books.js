const express = require('express');

const router = express.Router();

const Book = require('../model/bookModel')

// set up all application routes

// create a book
router.route('/add').post((req, res) =>{
    book.title = req.body.title
    book.author = req.body.author

    const book = new Book({title, author});

    book.save()
        .then((res) => res.json('Book added'))
        .catch(err => res.status(400).json('Error', err));
})

// get all books
router.route('/').get((req, res) =>{
  Book.find()
      .then((res) => res.json(''))
})

module.exports = router;