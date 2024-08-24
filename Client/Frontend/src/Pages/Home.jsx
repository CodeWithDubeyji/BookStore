/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner.jsx'
import { Link } from 'react-router-dom'
import { MdOutlineAddBox } from 'react-icons/md'
import BooksCards from '../components/home/BooksCards.jsx'
import BooksTable from '../components/home/BooksTable.jsx'

const Home = () => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('Card');

    useEffect(() => {
        setLoading(true)
        axios.get("http://localhost:8080/api/getBooks")
            .then((res) => {
                setBooks(res.data);
                setLoading(false)
            })
            .catch((error) => {
                console.log({ message: error.message });
                setLoading(false);
            })
    }, [])

    return (
        <div className='p-4'>
            <div className='flex justify-center items-center gap-x-4'>
                <button className=' bg-sky-950 hover:bg-blue-950 px-4 py-2 rounded-lg text-white' onClick={() => setShowType('Table')}>
                    Table
                </button>
                <button className=' bg-sky-950 hover:bg-blue-950 px-4 py-2 rounded-lg text-white' onClick={() => setShowType('Card')}>
                    Card
                </button>
            </div>
            <div className=' flex justify-between items-center'>
                <h1 className='text-3xl my-8'>Books List</h1>
                <Link to={`/books/create`}>
                    <MdOutlineAddBox className=' text-sky-950 text-4xl' />
                </Link>
            </div>
            {
                loading ? (<Spinner />) : (showType === 'Table' ?
                    <BooksTable books={books} /> : <BooksCards books={books} />)
            }
        </div>
    )
}

export default Home
