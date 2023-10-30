const express = require("express");
const router = express.Router();

const bookControllers = require("../controllers/bookControllers");

router.post("/postBook", bookControllers.createBook);
router.get("/getAllBooksDetails", bookControllers.getAllBooks);
router.get("/getBookByID/:id", bookControllers.getBookByID);
router.put("/updateBookByID/:id", bookControllers.updateBookByID);
router.delete("/deleteBookByID/:id", bookControllers.deleteBookByID);

module.exports = router;
