const Book = require("../models/bookModel");

const getAllBooks = async (req, res, next) => {
    const books = await Book.find();
    res.status(200).json({
        data: books,
    });
};

const addBook = async (req, res, next) => {
    const { title, year, author } = req.body;
    const book = await Book.create({
        title,
        author,
        year,
    });
    res.send(book);
};

const getBook = async (req, res, next) => {
    try {
        const book = await Book.findOne({ _id: req.params.id });
        res.send(book);
    } catch {
        res.status(404).json({
            error: "Book Doesnt Exist!!",
        });
    }
};

const deleteBook = async (req, res, next) => {
    try {
        await Book.deleteOne({ _id: req.params.id });
        res.send("Deleted");
    } catch {
        res.status(404).json({
            error: "Book Doesnt Exist !!",
        });
    }
};

const updateBook = async (req, res, next) => {
    try {
        const book = await Book.findOne({ _id: req.params.id });
        if (req.body.title) book.title = req.body.title;
        if (req.body.author) book.author = req.body.author;
        if (req.body.year) book.year = req.body.year;
        await book.save();
        res.send(book);
    } catch {
        res.status(404).json({
            error: "Book doesnt exist !!",
        });
    }
};

module.exports = {
    getAllBooks,
    addBook,
    getBook,
    deleteBook,
    updateBook,
};
