import React, { useState } from 'react'
import { DateIcon, GifIcon, ImgIcon, ModeIcon, StatsIcon, StickerIcon } from '../../assets/Images/Icons'
import avatar from '../../assets/Images/avatar.svg'
import Button from '../../components/button'
import First from '../../assets/Images/first.svg'
import Second from '../../assets/Images/second.svg'
import Third from '../../assets/Images/third.svg'
import PostItem from '../../components/PostItem'

export default function Home() {
  const [postValue,setPostValue] = useState("")
  const [postList, setPostList] = useState([
    {
      id:1,
      name:'Designsta',
      imgUrl:First,
      mail:'@inner · 25m',
      text:"Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
      comentcount:'10',
      replycount:'1',
      likecount:"8",
      img:null
    },
    {
      id:2,
      name:'cloutexhibition',
      imgUrl:Second,
      mail:'@RajLahoti · 22m',
      text:"YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.witterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
      comentcount:null,
      replycount:'5',
      likecount:"9",
      img:null
    },
    {
      id:3,
      name:'CreativePhoto',
      imgUrl:Third,
      mail:'@cloutexhibition · 1h',
      text:"Обетда.....  Кечиринглар",
      comentcount:'10',
      replycount:'1',
      likecount:"8",
      img:null
    },
  ]) 

  return (
    <div className='w-[80%]'>
      <div className='w-[70%] border-r-[1px] border-r-slate-400 h-screen overflow-y-auto'>
        <div className='sticky top-0 z-50 bg-white p-[20px] border-b-[1px] border-b-slate-400 flex justify-between'>
          <h2 className='font-bold text-[24px]  '>Home</h2>
          <button>
            <ModeIcon/>
          </button>
        </div>
        <form className='pb-[46px] relative pl-[22px] flex items-start space-x-[15px] border-b-[1px] border-b-slate-400 ' >
          <img src={avatar} alt="ava" width={60} height={60} />
          <div className='flex flex-col w-full mt-[11px] space-y-[51px] '>
            <input type="text" onChange={(e) => setPostValue(e.target.value) } placeholder='What’s happening' className='font-semibold text-[22px] outline-none placeholder:text-[#828282]' name='postValue' />
            <div className='flex space-x-[22px]'>
              <label>
                <input type="file" className='hidden'/>
                <ImgIcon/>
              </label>
              <label>
                <input type="file" className='hidden'/>
                <GifIcon/>
              </label>
              <label>
                <input type="file" className='hidden'/>
                <StatsIcon/>
              </label>
              <label>
                <input type="file" className='hidden'/>
                <StickerIcon/>
              </label>
              <label>
                <input type="file" className='hidden'/>
                <DateIcon/>
              </label>
            </div>
          </div>
          <Button title={'Tweet'} extrastyle={`w-[108px] absolute bottom-[5px] py-[16px] right-[18px] duration-300  ${postValue ? "" : "opacity-[40%]"}`}/>
        </form>
        <ul>
          {postList.map(item => <PostItem key={item.id} item={item}/>)}
        </ul>
      </div>
      <div className='w-[30%]'></div>
    </div>
  )
}
