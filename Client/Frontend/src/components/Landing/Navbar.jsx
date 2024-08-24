/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className=' w-full p-2 flex justify-between items-center'>
      <div className=' ml-24'>
      <Link to={"/"}>
       <img src="src\assets\Logo.svg" alt="" />
        </Link>
      </div>
      <div className='mr-24 flex justify-center items-center gap-x-16 text-xl text-white'>
        <Link to={"/books"}>
            Join Now!
        </Link>
      </div>
    </div>
  )
}

export default Navbar