// Import the Express framework
const express = require("express");
// Import the custom errorHandler middleware
const { errorHandler } = require("./middlewares/errorMiddleware");

const dotenv = require("dotenv");
// Import the database connection function
const connectDb = require("./config/config");
// Import the routes for different API endpoints
const bookRoutes = require("./routes/bookRoutes");
// Load environment variables from a .env file
dotenv.config();

// Establish a connection to the MongoDB database
connectDb();

// Create an instance of the Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Default route to display a welcome message
app.get("/", (req, res) => {
  res.send("<h1>Welcome to BrewApps Node Server</h1>");
});
app.use("/book", bookRoutes);

app.use(errorHandler);

// Define the port on which the server will listen
const PORT = 8080;

// Start the server and listen on the specified port
app.listen(process.env.PORT || PORT, () => {
  console.log(
    `Server Running in ${process.env.NODE_ENV} Mode on Port ${process.env.PORT}`
      .inverse
  );
});
