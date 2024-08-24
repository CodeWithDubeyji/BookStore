/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useSnackbar } from 'notistack'

function DeleteBook() {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar()
  
  useEffect(() => {
    axios.get(`http://localhost:8080/api/getBook/${id}`)
    .then((res) => {
      setBook(res.data)
      console.log(res.data)
    })
  }, [])
  
  const handleDelete = () => {
    setLoading(true)
    axios.delete(`http://localhost:8080/api/deleteBook/${id}`)
    .then(() => {
      setLoading(false)
      enqueueSnackbar("Book Deleted Successfully", {variants: 'success'})
      navigate('/books')
    })
    .catch((error) => {
      enqueueSnackbar("Error Occurred", {variants: 'error'})
      console.log({ message: error.message });
      setLoading(false);
    })
  };
  
  return (
    <div className='p-4'>
      {
        loading ? <Spinner /> : <div className='flex flex-col w-fit mx-auto border-2 border-sky-400 p-8 rounded-xl'>
          <p className='text-2xl text-gray-600 mb-4'>Are you sure you want to delete &apos;{book.title}&apos; ?</p>
          <div className='flex justify-center items-start gap-x-8'>
            <button className='text-lg px-8 py-2 bg-red-700 text-white ' onClick={handleDelete}>Yes</button>
            <button className='text-lg px-8 py-2 bg-green-700 text-white ' onClick={() => navigate('/')}>No</button>
          </div>
        </div>
      }
    </div>
  )
}

export default DeleteBook
