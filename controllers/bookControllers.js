// Import the Book model from the "../models/bookSchema" module
const Book = require("../models/bookSchema");

// Create a new book
const createBook = async (req, res) => {
  try {
    // Create a new book instance with data from the request body
    const book = new Book({
      title: req.body.title,
      author: req.body.author,
      summary: req.body.summary,
    });

    // Save the newly created book to the database
    const savedBook = await book.save();
    res.status(201).json(savedBook); // Respond with a 201 Created status for successful resource creation
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle and respond with a 500 Internal Server Error in case of an error
  }
};

// Get a list of all books
const getAllBooks = async (req, res) => {
  try {
    // Retrieve all books from the database
    const books = await Book.find();
    res.json(books); // Respond with the list of books
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle and respond with a 500 Internal Server Error in case of an error
  }
};

// Get details of a specific book by its ID
const getBookByID = async (req, res) => {
  try {
    // Find a book by its unique ID provided in the request parameters
    const book = await Book.findById(req.params.id);
    if (!book) {
      res.status(404).json({ message: "Book not found" }); // Respond with a 404 Not Found status if the book is not found
    } else {
      res.json(book); // Respond with the details of the found book
    }
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle and respond with a 500 Internal Server Error in case of an error
  }
};

// Update a book's details
const updateBookByID = async (req, res) => {
  try {
    // Find and update a book's details based on its ID and the data in the request body
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      res.status(404).json({ message: "Book not found" }); // Respond with a 404 Not Found status if the book is not found
    } else {
      res.json(updatedBook); // Respond with the updated book details
    }
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle and respond with a 500 Internal Server Error in case of an error
  }
};

// Delete a book
const deleteBookByID = async (req, res) => {
  try {
    // Find and remove a book from the database based on its ID
    const deletedBook = await Book.findByIdAndRemove(req.params.id);
    if (!deletedBook) {
      res.status(404).json({ message: "Book not found" }); // Respond with a 404 Not Found status if the book is not found
    } else {
      res.json({ message: "Book deleted" }); // Respond with a success message indicating the book was deleted
    }
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle and respond with a 500 Internal Server Error in case of an error
  }
};

// Export the CRUD operations as functions for use in other parts of the application
module.exports = {
  deleteBookByID,
  updateBookByID,
  getBookByID,
  getAllBooks,
  createBook,
};
