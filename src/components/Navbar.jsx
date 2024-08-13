import React, { useState } from 'react'
import Logo from '../assets/Images/logo.svg'
import { Link, } from 'react-router-dom'
import { BookmarksIcon, DotsIcon, ExploreIcon, HomeIcon, ListsIcon, MessageIcon, MoreIcon, NotificationIcon, ProfileIcon } from '../assets/Images/Icons'
import NavItem from './NavItem'
import Button from './button'
import avatar from '../assets/Images/avatar.svg'
import Modal from './Modal'

export default function Navbar() {
    const navList = [
        {
            id:1,
            text:'Home',
            path:'/',
            icon:<HomeIcon/>
        },
        {
            id:2,
            text:'Explore',
            path:'/explore',
            icon:<ExploreIcon/>
        },
        {
            id:3,
            text:'Notification',
            path:'/notification',
            icon:<NotificationIcon/>
        },
        {
            id:4,
            text:'Messages',
            path:'/messages',
            icon:<MessageIcon/>
        },
        {
            id:5,
            text:'Bookmarks',
            path:'/bookmarks',
            icon:<BookmarksIcon/>
        },
        {
            id:6,
            text:'Lists',
            path:'/lists',
            icon:<ListsIcon/>
        },
        {
            id:7,
            text:'Profile',
            path:'/profile',
            icon:<ProfileIcon/>
        },
        {
            id:8,
            text:'More',
            path:'/more',
            icon:<MoreIcon/>
        },
    ]
    const [openModal,setOpenModal] = useState(false)
    function logOut(){
        localStorage.clear()
        location.pathname = '/'
    }
  return (
    <div className='relative w-[18%] pt-[31px] pr-[53px] border-r-[1px] h-screen border-slate-400 overflow-y-auto'>
        <Link>
           <img src={Logo} alt="logo" />
        </Link>
        <ul className='mt-[49px] space-y-[25px] mb-[30px]'>
            {navList.map(item => <NavItem key={item.id} item={item}/>)}
        </ul>
        <Button title={'Tweet'} extrastyle={'py-[15px] w-full'} type={'button'}/>
        <div className='absolute bottom-[20px] flex items-center space-x-[10px]'>
            <img src={avatar} alt="ava" width={50} height={50} />
            <div className='flex flex-col'>
                <strong className='font-semibold text-[16px] text-[#000000]'>Bobur</strong>
                <a className='font-normal text-[16px] text-[#000] opacity-[60%]' href="mailto:">@bobur_mansurov</a>
            </div>
            <button onClick={() => setOpenModal(true)}><DotsIcon/></button>
            <Modal openModal={openModal} setOpenModal={setOpenModal}>
                <h2 className='text-[35px] font-bold text-white '>Do you really want to quit?</h2>
                <div className='flex justify-around mt-[70px]'>
                    <Button onClick={() => setOpenModal(false)}  extrastyle={'w-[150px] py-[10px] bg-green-500 '} title={'No'}/>
                    <Button onClick={logOut} extrastyle={'w-[150px] py-[10px] bg-red-500 '} title={'Yes'}/>
                </div>
            </Modal>
        </div>
    </div>
  )
}
