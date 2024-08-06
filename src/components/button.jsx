import React from 'react'

function Button({title,extrastyle}) {
  return (
    <button className={`${extrastyle} bg-[#1DA1F2] py-[18px] font-bold text-[18px] leading-[24px] text-white rounded-[76px]`} type={'submit'}>{title}</button>
  )
}

export default Button