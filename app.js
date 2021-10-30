const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bookRouter = require("./routers/bookRouter");

const app = express();

dotenv.config({
    path: "./config.env",
});

const PORT = process.env.PORT;

app.use(express.json());
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => {
        console.log("MongoDB Connected!!");
    })
    .catch((err) => {
        console.error(err);
    });

app.use("/book", bookRouter);

app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
});

module.exports = app;
