/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'
import BookSingleCard from './BookSingleCard';

function BooksCards({ books }) {
  return (
    <div className=' grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {
        books.map((book) => (
          <BookSingleCard key={book._id} book={book}/>
        ))
      }
    </div>
  )
}

export default BooksCards
