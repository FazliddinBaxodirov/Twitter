import React from 'react'

export default function PostItem({item}) {
  return (
    <li className='flex space-x-[15px] pt-[10px] px-[25px] pb-[21px] border-b-[1px] border-b-slate-400'>
      <img src={item.imgUrl} alt="" />
      <div>
        <div className='flex space-x-[5px]'> 
            <strong>{item.name}</strong>
            <span>{item.email}</span>
        </div>
        <p>{item.text}</p>
      </div>
    </li>
  )
}
