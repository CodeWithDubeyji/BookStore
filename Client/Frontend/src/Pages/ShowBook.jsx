/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner';
import { useSnackbar } from 'notistack'

function ShowBook() {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const {id} = useParams();
  const { enqueueSnackbar } = useSnackbar()
  
  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:8080/api/getBook/${id}`)
    .then((res) => {
      setBook(res.data);
      enqueueSnackbar("Book Details fetched Successfully", {variants: 'success'})
      setLoading(false);
    })
    .catch((error) => {
      enqueueSnackbar("Error Occurred", {variants: 'error'})
      console.log({message: error.message});
      setLoading(false);
  })
  }, [])

  return (
    <div className=' p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Book Details</h1>
      {
        loading ? (<Spinner />) : (
          <div className='flex flex-col border-2 border-blue-950 rounded-xl w-fit p-4'>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-600'>Id: </span>
              <span>{book._id}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-600'>Title: </span>
              <span>{book.title}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-600'>Author: </span>
              <span>{book.author}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-600'>Published in the year: </span>
              <span>{book.publishYear}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-600'>Created at: </span>
              <span>{new Date(book.createdAt).toString().split("GMT", 1)}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-600'>Last updated at: </span>
              <span>{new Date(book.updatedAt).toString().split("GMT", 1)}</span>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default ShowBook
