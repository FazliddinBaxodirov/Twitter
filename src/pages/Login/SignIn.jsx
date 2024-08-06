import React, { useContext } from 'react'
import logo from '../../assets/Images/logo.svg'
import { Link } from 'react-router-dom'
import Input from '../../components/Input'
import Button from '../../components/button'
import { Context } from '../../context/Context'
import toast, { Toaster } from 'react-hot-toast'

export default function SignIn() {
  const {setToken} = useContext(Context)
  function handleSubmitLogin(e){
    e.preventDefault()
    const obj = {
      login:e.target.login.value,
      password:e.target.password.value
    }
    if(obj.login == 'fazliddin' && obj.password == '123'){
      toast.success('Success')
      setTimeout(() => {
        setToken(obj)
      }, 1000);
      e.target.reset()
    }
    else{
      toast.error('Wrong login or password')
      e.target.reset()
    }
    
  }
  return (
    <>
    <Toaster position="top-right" reverseOrder={false}/>
    <form onSubmit={handleSubmitLogin} autoComplete='off' className='w-[450px] mx-auto mt-[60px]'>
        <Link className='inline-block mb-[36px]'><img src={logo} alt="logo" /></Link>
        <h2 className='font-bold text-[42px] mb-[36px]'>Log into Twitter</h2>
        <Input placeholder={'Phone number, email address'} type={'text'} name={'login'} />
        <Input placeholder={'Password'} type={'password'} name={'password'} />
        <Button title={'Log In'} extrastyle={'w-full hover:opacity-[70%]'}/>
        <div className='mt-[40px] flex justify-between'>
          <Link to={'/signup'} className='font-normal text-[18px] leading-[24px] text-[#1DA1F2]'>Forgot password?</Link>
          <Link className='font-normal text-[18px] leading-[24px] text-[#1DA1F2]'>Sign up to Twitter</Link>
        </div>
    </form>
    </>
  )
}
