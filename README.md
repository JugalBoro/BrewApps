# Book Management API

This Node.js application provides a RESTful API for managing books. It allows you to perform basic CRUD (Create, Read, Update, Delete) operations on book records.

## API Endpoints and Their Usage

- **POST /book/postBook**: Create a new book. Send a JSON object in the request body with the book's title, author, and summary.

- **GET /book/getAllBooksDetails**: Retrieve a list of all books.

- **GET /book/getBookByID/:id**: Retrieve details of a specific book by providing its unique ID in the URL.

- **PUT /book/updateBookByID/:id**: Update a book's details by providing its ID in the URL and sending a JSON object with the updated data in the request body.

- **DELETE /book/deleteBookByID/:id**: Delete a book by providing its ID in the URL.

## Installation

To set up and run this application locally, follow these steps:

1. Clone the GitHub repository:

   ```sh
   git clone <repository_url>
   cd <repository_directory>
