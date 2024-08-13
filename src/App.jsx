import { lazy, Suspense, useContext,  } from 'react'
import './App.css'
import {Context} from './context/Context'
import Dashboard from './routes/Dashboard'
import Loading from './assets/Images/loading.png'

const Login = lazy(() => new Promise(resolve => {
  return setTimeout(() => resolve(import('./routes/Login')),1200)
}))

function App() {
  const {token} = useContext(Context)

  return token ? <Dashboard/> :<Suspense fallback={<div className='flex items-center justify-center mt-[200px]'><img src={Loading} alt="loading..." width={150} height={150} /></div>}><Login/></Suspense>
}

export default App
 