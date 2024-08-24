import express from 'express'
import Book from "../models/BookModel.js";

const router = express.Router()

// Add a Book 

router.post("/addBook", async (req, res) => {
    try {
        const book = new Book(req.body);
        book.save().then((doc) => {
            res.status(201).json(doc)
        });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }

})

//Read all books

router.get('/getBooks', async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).send(books);
    } catch (error) {
        console.log({ message: error.message });
    }
});

//Read one book

router.get('/getBook/:id', async (req, res) => {
    try {
        const id = req.params.id
        const book = await Book.findOne({ _id: id });
        res.status(200).send(book);
    } catch (error) {
        console.log({ message: error.message });
    }

});

//Update one book

router.put('/UpdateBook/:id', async (req, res) => {
    try {
        const id = req.params.id
        const book = await Book.findOneAndUpdate({ _id: id }, req.body, { new: true });
        res.status(200).send(book);
    } catch (error) {
        console.log({ message: error.message });
    }

});

//Delete one book

router.delete('/deleteBook/:id', async (req, res) => {
    try {
        const id = req.params.id
        const books = await Book.findOneAndDelete({ _id: id }, { new: true });
        res.status(200).send(books);
    } catch (error) {
        console.log({ message: error.message });
    }

});

export default router