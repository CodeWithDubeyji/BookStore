import express, { json } from 'express';
import PORT from './Port.js';
import bookRoute from './routes/bookRoute.js'
import cors from 'cors'
const server = express();

server.use(express.json());

server.use(cors());

// Connecting Mongoose 
import mongoose from 'mongoose'
const { Schema } = mongoose;
// Connecting to the database
main().catch(err => console.log(err))

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
    console.log("Database connected")
}

server.use('/api', bookRoute)

server.listen(PORT, () => {
    console.log(`Server Started on ${PORT} Port.`)
})