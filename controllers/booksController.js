const Book = require('../model/bookModel')

// creating a new book
function addBook(req, res){
  const title = req.body.title;
  const author = req.body.author;
  const yearPublished = req.body.yearPublished;
  const pages = req.body.pages;

  const newBook = new Book({title, author, yearPublished, pages});

  newBook.save()
      .then(() => res.json('Book added'))
      .catch(err => res.status(400).json('Error:' + err));
}

// get all books
function getBooks(req, res){
  Book.find()
      .then(books => res.json(books))
      .catch(err => res.status(400).json('Error: ' + err))
}


// get a single book
function getSingleBook(req, res){
  Book.findById(req.params.id)
      .then(books => res.json(books))
      .catch(err => res.status(400).json('Error: ' + err))
}

// update a book
function updateBook(req, res){
  Book.findById(req.params.id)
      .then(book => {
        book.title = req.body.title
        book.author = req.body.author
        book.yearPublished = req.body.yearPublished
        book.pages = req.body.pages

      book.save()
      .then(() => res.json('Book updated'))
      .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
}

// delete a book
function deleteBook(req, res){
  Book.findByIdAndDelete(req.params.id)
    .then(() => res.json('Book Deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
}


module.exports = { addBook, getBooks, getSingleBook, updateBook, deleteBook};