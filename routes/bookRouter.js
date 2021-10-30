const express = require("express");
const {
    getAllBooks,
    addBook,
    getBook,
    deleteBook,
    updateBook,
} = require("../controllers/bookController");

const router = express.Router();

router.get("/getAll", getAllBooks);
router.get("/getBook/:id", getBook);
router.post("/addBook", addBook);
router.delete("/deleteBook/:id", deleteBook);
router.patch("/updateBook/:id", updateBook);

module.exports = router;
