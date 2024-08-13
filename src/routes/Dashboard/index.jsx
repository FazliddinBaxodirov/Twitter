import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Loading from '../../assets/Images/loading.png'
import {Tweets,TweetsReplies,Media,Likes} from '../../pages/Dashboard/ProfileItems'

const Home = lazy(() => new Promise(resolve => {
  return setTimeout(() => resolve(import('../../pages/Dashboard/Home')),1200)
}))
const Profile = lazy(() => new Promise(resolve => {
  return setTimeout(() => resolve(import('../../pages/Dashboard/Profile')),1200)
}))

export default function DashboardRoute() {
  return (
    <div className='container max-w-[1300px] mx-auto flex '>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Suspense fallback={<div className='flex items-center justify-center mx-auto'><img src={Loading} alt="loading..." width={150} height={150} /></div>}><Home/></Suspense>}/>
        <Route path='/profile' element={<Suspense fallback={<div className='flex items-center justify-center mx-auto'><img src={Loading} alt="loading..." width={150} height={150} /></div>}><Profile/></Suspense>}>
          <Route path='/profile' index element={<Tweets/>}/>
          <Route path='tweets-replies' element={<TweetsReplies/>}/>
          <Route path='media' element={<Media/>}/>
          <Route path='likes' element={<Likes/>}/>
        </Route>
      </Routes>
    </div>
  )
}
