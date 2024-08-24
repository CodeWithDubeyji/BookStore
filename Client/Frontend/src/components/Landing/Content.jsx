import React from 'react'
import { Link } from 'react-router-dom'

const Content = () => {
  return (
    <div className='absolute right-40 top-52'>
        <h1 className='text-4xl font-bold text-white mb-12'>Stack em' up, read 'em down!</h1>
        <p className='text-3xl font-light text-white mb-12'>Tame your TBR list <br /> Organize your next read.</p>
        <Link to={'/books'} className=' py-4 px-5 rounded-lg bg-[#FF3434] text-white font-bold text-2xl mb-12'>Join Now</Link>
    </div>
  )
}

export default Content