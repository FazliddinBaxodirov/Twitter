import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Profile } from '../../pages/Dashboard'
import Navbar from '../../components/Navbar'

export default function DashboardRoute() {
  return (
    <div className='container max-w-[1200px] mx-auto flex justify-between'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  )
}
