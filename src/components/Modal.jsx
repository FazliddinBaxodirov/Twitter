import React, { Children } from 'react'

export default function Modal({children,openModal}) {
  return (
    <div className={`modal fixed ${openModal ? 'scale-100' : 'scale-0'} z-50 transition-all duration-500 top-0 left-[-10px] right-0 bottom-0 w-full h-full backdrop-blur-md bg-black/50`}>
         <div className="p-[50px] rounded-md absolute bg-blue-400 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
         {children}
        </div>
    </div>
  )
}
