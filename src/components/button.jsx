import React from 'react'

function Button({title,extrastyle,type}) {
  return (
    <button className={`${extrastyle} bg-[#1DA1F2] py-[18px] font-bold text-[18px] leading-[24px] text-white rounded-[76px]`} type={type}>{title}</button>
  )
}

export default Button