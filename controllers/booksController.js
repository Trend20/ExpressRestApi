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
    res.status(500).json({ message: error });
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
    res.status(500).json({ message: error });
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
    res.status(500).json({ message: error });
  }
};

// update a book
exports.updateBook = async (req, res) => {
  try {
    const { title, author, yearPublished, pages } = req.body;
    const book = await Book.findById(req.params.id);
    if (!book) {
      res.status(404).json({ message: "Book not found" });
    }
    await Book.findByIdAndUpdate(book, { title, author, yearPublished, pages });
    res.status(201).json({ message: "Book updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
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
    res.status(500).json({ message: error });
  }
};
