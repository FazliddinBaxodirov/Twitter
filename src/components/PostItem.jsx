import React, { useContext } from 'react'
import { CommentIcon, DotsIcon, LikeIcon, ReplyIcon, SendIcon, StatisticIcon } from '../assets/Images/Icons'
import { Context } from '../context/Context'

console.log(null );

export default function PostItem({item}) {
  const {postList, setPostList} = useContext(Context)
  function handleComment(val){
    val.isCommented = !val.isCommented
    val.commentcount = val.isCommented ? ++val.comentcount : --val.comentcount
    if(val.comentcount == 0){
      val.comentcount = null
    }
    setPostList([...postList])
  }
  function handleReply(val){
    val.isReplied = !val.isReplied
    val.replycount = val.isReplied ? val.replycount + 1 : val.replycount - 1
    if(val.replycount == 0){
      val.replycount = null
    }
    setPostList([...postList])
  }
  function handleLike(val){
    val.isLiked = !val.isLiked
    val.likecount = val.isLiked ? val.likecount + 1 : val.likecount - 1
    if(val.likecount == 0){
      val.likecount = null
    }
    setPostList([...postList])
  }
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
            <button onClick={() => handleComment(item)} className={`${item.isCommented ? "text-blue-500" : "text-[#536471]"} flex space-x-[10px] text-[#536471]`}>
                <CommentIcon/>
                <span>{item.comentcount}</span>
            </button>
            <button onClick={() => handleReply(item)} className={`${item.isReplied ? "text-green-500" : "text-[#536471]"} flex space-x-[10px] text-[#536471]`}>
                <ReplyIcon/>
                <span>{item.replycount}</span>
            </button>
            <button onClick={() => handleLike(item)} className={`${item.isLiked ? "text-red-500" : "text-[#536471]"} flex space-x-[10px] text-[#536471]`}>
                <LikeIcon/>
                <span>{item.likecount}</span>
            </button>
            <button className='text-[#536471]'>
                <SendIcon/>
            </button>
            <button className='text-[#536471]'>
                <StatisticIcon/>
            </button>
        </div>
      </div>

      <button className='absolute top-[21px] right-[25px]'>
        <DotsIcon/>
      </button>

    </li>
  )
}
