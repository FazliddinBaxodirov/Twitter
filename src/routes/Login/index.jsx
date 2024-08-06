import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignIn, SignUp } from '../../pages/Login'

export default function LoginRoute() {
  return (
   <Routes>
    <Route path='/' element={<SignIn/>}/>
    <Route path='/signup' element={<SignUp/>}/>
   </Routes> 
  )
}
