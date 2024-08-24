import mongoose from "mongoose";
const { Schema } = mongoose;

// Creating a Schema - A specification according to which a Data Object is created in a Database

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishYear: {
        type: Number,
        required: true
    }
},
{
    timestamps: true
});

// Creating a Model - Its a Class which can be instantiated to make an object inside the ports

const Book = mongoose.model('Book', bookSchema);

export default Book