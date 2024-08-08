import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavItem({item}) {
  return (
    <div>
      <li>
            <NavLink className={'flex items-center space-x-[20px]'}>
                {item.icon}
                <span className='text-[18px] font-semibold'>{item.text}</span>
            </NavLink>
        </li>
    </div>
  )
}
