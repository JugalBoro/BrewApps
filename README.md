# Book Management API

This Node.js application provides a RESTful API for managing books. It allows you to perform basic CRUD (Create, Read, Update, Delete) operations on book records.

## API Endpoints and Their Usage

- **POST:  https://brewapps-cicd.onrender.com/book/postBook**  : Create a new book. Send a JSON object in the request body with the book's title, author, and summary.

- **GET:  https://brewapps-cicd.onrender.com/book/getAllBooksDetails**  : Retrieve a list of all books.

- **GET:   https://brewapps-cicd.onrender.com/book/getBookByID/:id**  : Retrieve details of a specific book by providing its unique ID in the URL.

- **PUT: https://brewapps-cicd.onrender.com/book/updateBookByID/:id**  : Update a book's details by providing its ID in the URL and sending a JSON object with the updated data in the request body.

- **DELETE: https://brewapps-cicd.onrender.com/book/deleteBookByID/:id**  : Delete a book by providing its ID in the URL.

## Installation

To set up and run this application locally, follow these steps:

1. Clone the GitHub repository:

   ```sh
   git clone https://github.com/JugalBoro/BrewApps.git
   cd BrewApps

2. Install Dependencies :
    ```sh
    npm install
## 3. Make .env File : 
   ### Copy all the details of .env.dev into .env file
4. Start the Application:
    ```sh
    npm start
