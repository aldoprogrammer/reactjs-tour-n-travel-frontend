import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import SearchResultList from '../pages/SearchResultList'
import TourDetails from '../pages/TourDetails'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Tours from '../pages/Tours'
import Home from '../pages/Home'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='/home' /> }/>
      <Route path="/home" element={<Home /> }/>
      <Route path='/tours' element={<Tours />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/tours/:id' element={<TourDetails />} />
      <Route path='/tours/search' element={<SearchResultList />}/>
    </Routes>
  )
}

export default Routers