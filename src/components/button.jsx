import React from 'react'

function Button({title,extrastyle,type,onClick}) {
  return (
    <button onClick={onClick} className={`${extrastyle} bg-[#1DA1F2]  font-bold text-[18px] leading-[24px] text-white rounded-[76px]`} type={type}>{title}</button>
  )
}

export default Button