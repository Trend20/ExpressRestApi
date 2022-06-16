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
      .then(books => res.json(books))
      .catch(err => res.status(400).json('Error ' , err))
})

// get specific book
router.route('/:id').get((req, res) =>{
  Book.findById(req.params.id)
      .then(books => res.json(books))
      .catch(err => res.status(400).json('Error ' , err))
})



// update book
router.route('/update/:id').post((req, res) =>{
  Book.findById(req.params.body)
      .then(book => {
        book.title = req.body.title
        book.author = req.body.author
      })
    book.save()
      .then((res) => res.json('Book added'))
      .catch(err => res.status(400).json('Error', err));
})


// delete book
router.route('/:id').delete((req, res) =>{
    Book.findByIdAndDelete(req.params.id)
      .then((res) => res.json('Book Deleted'))
      .catch(err => res.status(400).json('Error', err));
})


module.exports = router;