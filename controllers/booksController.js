const Book = require("../model/bookModel");

// creating a new book
exports.addBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        book: newBook,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

// get all books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      status: "success",
      data: {
        books,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

// get a single book
exports.getSingleBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        book,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

// update a book
exports.updateBook = async (req, res) => {
  await Book.findById(req.params.id)
    .then((book) => {
      book.title = req.body.title;
      book.author = req.body.author;
      book.yearPublished = req.body.yearPublished;
      book.pages = req.body.pages;

      book
        .save()
        .then(() => res.json("Book updated"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

// delete a book
exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(res.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    console.error(error);
  }
};

// module.exports = { addBook, getBooks, getSingleBook, updateBook, deleteBook };
