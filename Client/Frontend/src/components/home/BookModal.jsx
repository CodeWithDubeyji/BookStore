/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from 'react-icons/bi'
import axios from 'axios'
function BookModal({ book, onclose }) {
    const [about, setAbout] = useState([]);

    const generateAbout = async() => {

        setAbout("loading...")

        const response = await axios({
            url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${String(import.meta.env.VITE_API_KEY)}`,
            method: "post",
            data: {
                contents: [
                    {
                        parts: [
                            { text: `Provide a summary about the book named ${book.title}, written by ${book.author} in breif of about 80 words, and DO NOT include your opinions.` }
                        ]
                    }
                ]
            }
        })
        console.log(response)
        setAbout(response['data']['candidates'][0]['content']['parts'][0]['text'])
    }
    return (
        <div
            className='fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-60 z-50 flex justify-center items-center'
            onClick={onclose}>
            <div
                className=' w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
                onClick={(e) => e.stopPropagation()}>
                <AiOutlineClose
                    className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
                    onClick={onclose} />
                <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
                    {book.publishYear}
                </h2>
                <h4 className='my-2 text-gray-500'>{book._id}</h4>
                <div className='flex justify-start items-center gap-x-2'>
                    <PiBookOpenTextLight className='text-red-300 text-2xl' />
                    <h2 className='my-1'>{book.title}</h2>
                </div>

                <div className='flex justify-start items-center gap-x-2'>
                    <BiUserCircle className='text-red-300 text-2xl' />
                    <h2 className='my-1'>{book.author}</h2>
                </div>
                <div className='flex justify-between items-center'>
                    <p>Click for Summary of this Book: </p>
                    <button id='button' className='text-white text-md px-3 py-2 rounded-lg bg-blue-800' onClick={(generateAbout)}>Summary</button>
                </div>
                <p className=' text-gray-600 text-md my-4'>{about}</p>
            </div>
        </div>
    )
}

export default BookModal
