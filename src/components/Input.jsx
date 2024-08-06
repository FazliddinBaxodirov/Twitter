import React from 'react'

export default function Input({placeholder,type,name}) {
  return (
    <input type={type} placeholder={placeholder} name={name} required className='w-full py-[23px] pl-[20px] border-[1px] border-slate-400 outline-none focus:shadow-md rounded-[6px] mb-[25px] text-[#1DA2F3]'/>
  )
}
