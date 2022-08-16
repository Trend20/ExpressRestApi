const express = require('express');

const router = express.Router();

const booksController = require('../controllers/booksController');

// set up all application routes

// create a book
router.route('/add').post(booksController.addBook);

// get all books
router.route('/').get(booksController.getBooks);

// get specific book
router.route('/:id').get(booksController.getSingleBook);



// update book
router.route('/update/:id').post(booksController.updateBook);


// delete book
router.route('/:id').delete(booksController.deleteBook);


module.exports = router;