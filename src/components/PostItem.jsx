import React from 'react'
import { CommentIcon, DotsIcon, LikeIcon, ReplyIcon, SendIcon, StatisticIcon } from '../assets/Images/Icons'

export default function PostItem({item}) {
  return (
    <li className='flex relative space-x-[15px] items-start pt-[10px] px-[25px] pb-[21px] border-b-[1px] border-b-slate-400'>
      <img src={item.imgUrl} alt="" />
      <div>
        <div className='flex space-x-[5px] '> 
            <strong>{item.name}</strong>
            <span>{item.email}</span>
        </div>
        <p className='mb-[15px]'>{item.text}</p>
        {item.img ? <img src={item.img} alt="kebab" width={679}  height={453}/> : ""}
        <div className='flex w-[586px] justify-between mt-[22px]'>
            <div className='flex space-x-[10px] text-[#536471]'>
                <CommentIcon/>
                <span>{item.commentcount}</span>
            </div>
            <div className='flex space-x-[10px] text-[#536471]'>
                <ReplyIcon/>
                <span>{item.replycount}</span>
            </div>
            <div className='flex space-x-[10px] text-[#536471]'>
                <LikeIcon/>
                <span>{item.likecount}</span>
            </div>
            <div className='text-[#536471]'>
                <SendIcon/>
            </div>
            <div className='text-[#536471]'>
                <StatisticIcon/>
            </div>
        </div>
      </div>

      <button className='absolute top-[21px] right-[25px]'>
        <DotsIcon/>
      </button>

    </li>
  )
}
