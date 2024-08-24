/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import Landing from './Pages/Landing'
import Home from './Pages/Home'
import ShowBook from './Pages/ShowBook'
import CreateBook from './Pages/CreateBook'
import EditBook from './Pages/EditBook'
import DeleteBook from './Pages/DeleteBook'
function App() {

  return (
    <Routes>
      <Route path='/'  element={<Landing />} />
      <Route path='/books'  element={<Home />} />
      <Route path='/books/create'  element={<CreateBook />} /> 
      <Route path='/books/details/:id'  element={<ShowBook />} /> 
      <Route path='/books/edit/:id'  element={<EditBook />} /> 
      <Route path='/books/delete/:id'  element={<DeleteBook />} /> 
    </Routes>
  )
}

export default App
