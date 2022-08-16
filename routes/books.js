const express = require('express');

const router = express.Router();

// set up all application routes

// create a book
router.route('/add').post()

// get all books
router.route('/').get()

// get specific book
router.route('/:id').get()



// update book
router.route('/update/:id').post()


// delete book
router.route('/:id').delete()


module.exports = router;