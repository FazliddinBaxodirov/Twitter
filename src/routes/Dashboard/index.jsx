import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Profile } from '../../pages/Dashboard'

export default function DashboardRoute() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
    </Routes>
  )
}
