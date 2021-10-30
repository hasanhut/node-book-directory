const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please enter a name for the book !!"],
    },
    year: {
        type: String,
    },
    author: {
        type: String,
        required: [true, "Please enter a author for the book !!"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Books", BookSchema);
