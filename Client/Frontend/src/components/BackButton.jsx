import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowLeft} from 'react-icons/bs'
function BackButton({destination = "/books"}) {
  return (
    <div className='flex'>
      <Link className='bg-blue-950 w-fit rounded-lg text-white px-3 py-2' to={destination}>
      <BsArrowLeft className='text-2xl'/>
      </Link>
    </div>
  )
}

export default BackButton
