/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack'

function EditBook() {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [publishYear, setPublishYear] = useState();
  const [loading, setLoading] = useState();
  
  const navigate = useNavigate();
  
  const { enqueueSnackbar } = useSnackbar();
  const {id} = useParams()
  
  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:8080/api/getBook/${id}`)
    .then((res) => {
      setTitle(res.data.title)
      setAuthor(res.data.author)
      setPublishYear(res.data.publishYear)
      setLoading(false)
    })
    .catch((error) => {
      setLoading(false)
      alert("Something went wrong...")
      console.log({message: error.message})
    })
  }, [])
  
  const handleUpdateBook = () => {
    setLoading(true);
    const data = {
      title,
      author,
      publishYear
    };
    axios.put(`http://localhost:8080/api/updateBook/${id}`, data)
    .then(() => {
      setLoading(false)
      enqueueSnackbar("Book Edited Successfully", {variants: 'success'})
      navigate('/books')
    })
    .catch((error) => {
      setLoading(false)
      // alert("Something went wrong...")
      enqueueSnackbar("Error Occurred", {variants: 'error'})
      console.log({message: error.message})
    })
  }
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4' >Edit Book</h1>
      {loading ? <Spinner /> : 
      <div className='flex flex-col border-2 border-blue-950 w-[600px] p-4 mx-auto rounded-xl'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-700'>Title</label>
          <input
           type="text"
           value = {title}
           onChange={(e) => setTitle(e.target.value)}
           className='border-2 border-gray-500 py-2 px-4 w-full rounded-xl'
           />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-700'>Author</label>
          <input
           type="text"
           value = {author}
           onChange={(e) => setAuthor(e.target.value)}
           className='border-2 border-gray-500 py-2 px-4 w-full rounded-xl'
           />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-700'>Published in</label>
          <input
           type='Number'
           value = {publishYear}
           onChange={(e) => setPublishYear(e.target.value)}
           className='border-2 border-gray-500 py-2 px-4 w-full rounded-xl'
           />
        </div>
        <button className='m-8 p-2 bg-blue-950 text-white rounded-xl' onClick={handleUpdateBook}>Update</button>
      </div>}
    </div>
  )
}

export default EditBook
