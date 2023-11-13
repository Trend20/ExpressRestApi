const express = require("express");

const router = express.Router();
const {
  addBook,
  getBooks,
  getSingleBook,
  updateBook,
  deleteBook,
} = require("../controllers/booksController");

// set up all application routes

// create a book
router.route("/").post(addBook);

// get all books
router.route("/").get(getBooks);

// get specific book
router.route("/:id").get(getSingleBook);

// update book
router.route("/update/:id").post(updateBook);

// delete book
router.route("/:id").delete(deleteBook);

module.exports = router;
