/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'
import { BiShow } from 'react-icons/bi'
import BookModal from './BookModal';

function BookSingleCard({ book }) {
    const [showModal, setShowModal] = useState(false);
    return (
        <div key={book._id} className='border-2 border-blue-950 rounded-lg px4 py-2 m-4 relative hover:shadow-xl'>

            <h2 className='absolute top-1 right-2 px-4 py-2 bg-red-600 text-white rounded-lg'>{book.publishYear}</h2>

            <h4 className='my-2 mx-2 text-gray-600'>{book._id}</h4>

            <div className='flex justify-center items-center gap-x-2'>
                <PiBookOpenTextLight className=' text-3xl font-bold' />
                <h2 className='my-1'>{book.title}</h2>
            </div>
            <div className='flex justify-center items-center gap-x-2'>
                <FaRegCircleUser className='  text-2xl ' />
                <h2 className='my-2'>{book.author}</h2>
            </div>

            <div className='flex justify-around items-center gap-x-2 mt-4 p-4'>
                <BiShow
                    className='text-3xl text-blue-800 hover:text-black cursor-pointer'
                    onClick={() => setShowModal(true)}
                />

                <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className='text-2xl text-green-700 hover:text-black' />
                </Link>

                <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className='text-2xl text-yellow-700 hover:text-black' />
                </Link>

                <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className='text-2xl text-red-700 hover:text-black' />
                </Link>
                
            </div>
            {
                showModal && <BookModal book={book} onclose={() => setShowModal(false)}/> 
            }
        </div>
    )
}

export default BookSingleCard
