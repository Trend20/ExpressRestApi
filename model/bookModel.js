const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    yearPublished: {
      type: Number,
      required: true,
    },
    pages: {
      type: Number,
      required: true,
    },
    isbn: {
      type: Number,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    availability: {
      type: Boolean,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    publicationDate: {
      type: Date,
      required: true,
    },
    pageCount: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    reviews: {
      type: [],
      required: true,
    },
    edition: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
