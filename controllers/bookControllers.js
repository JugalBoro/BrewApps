const express = require("express");
const Book = require("../models/bookSchema");

// Create a new book
const createBook = async (req, res) => {
  try {
    const book = new Book({
      title: req.body.title,
      author: req.body.author,
      summary: req.body.summary,
    });

    const savedBook = await book.save();
    res.status(201).json(savedBook); // 201 Created status for successful resource creation
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a list of all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get details of a specific book by its ID
const getBookByID = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      res.status(404).json({ message: "Book not found" }); // 404 Not Found if the book is not found
    } else {
      res.json(book);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a book's details
const updateBookByID = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      res.status(404).json({ message: "Book not found" });
    } else {
      res.json(updatedBook);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a book
const deleteBookByID = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndRemove(req.params.id);
    if (!deletedBook) {
      res.status(404).json({ message: "Book not found" });
    } else {
      res.json({ message: "Book deleted" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  deleteBookByID,
  updateBookByID,
  getBookByID,
  getAllBooks,
  createBook,
};
