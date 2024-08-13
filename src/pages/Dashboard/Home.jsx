import React, { useContext, useState } from 'react'
import { DateIcon, DotsIcon, GifIcon, ImgIcon, ModeIcon, StatsIcon, StickerIcon } from '../../assets/Images/Icons'
import avatar from '../../assets/Images/avatar.svg'
import Button from '../../components/button'
import PostItem from '../../components/PostItem'
import { Context } from '../../context/Context'
import settings from '../../assets/Images/settings.svg'
import { Link } from 'react-router-dom'
import mushtariy from '../../assets/Images/mushtariy.svg'
import shuhrat from '../../assets/Images/shuhrat.svg'

export default function Home() {
  const {postList,setPostList} = useContext(Context)
  const [img ,setImg] = useState('')
  const token = JSON.parse(localStorage.getItem('token'))
  const [postValue,setPostValue] = useState("")


  function HandleSubmit(e){
    e.preventDefault()
    const obj = {
      id:postList[postList.length - 1] + 1,
      name:token?.login,
      imgUrl:avatar,
      mail:'@inner · 25m',
      text:e.target.postValue.value,
      comentcount:null,
      replycount:null,
      likecount:null,
      img:img
    }
    setPostList([obj, ...postList])
    e.target.reset()
    
  }

  return (
    <div className='w-[85%] flex'>
      <div className='w-[68%] border-r-[1px] border-r-slate-400 h-screen overflow-y-auto'>
        <div className='sticky top-0 z-40 bg-white p-[20px] border-b-[1px] border-b-slate-400 flex justify-between'>
          <h2 className='font-bold text-[24px]  '>Home</h2>
          <button>
            <ModeIcon/>
          </button>
        </div>
        <form autoComplete='off' onSubmit={HandleSubmit} className='pb-[46px] relative pl-[22px] flex items-start space-x-[15px] border-b-[1px] border-b-slate-400 ' >
          <img src={avatar} alt="ava" width={60} height={60} />
          <div className='flex flex-col w-full mt-[11px] space-y-[51px] '>
            <input type="text" onChange={(e) => setPostValue(e.target.value) } placeholder='What’s happening' className='font-semibold text-[22px] outline-none placeholder:text-[#828282]' name='postValue' />
            <div className='flex space-x-[22px]'>
              <label>
                <input type="file" onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))} className='hidden'/>
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
      <div className='w-[32%] pl-[28px] pt-[20px] overflow-y-auto h-screen'>
        <div className='flex flex-col space-y-[20px]'>
          <input type="text" placeholder='Search Twitter' className='w-full py-[15px] font-normal text-[18px] placeholder:text-[#5C6C79]  text-[#5C6C79] bg-[#EFF3F4] rounded-[31px] pl-[20px]'   />
          <div className='bg-[#EFF3F4] px-[15px] rounded-[10px] pb-[30px]'>
            <div className='flex justify-between pt-[20px] mb-[20px]'>
              <h3 className='font-bold text-[24px] text-[#000]'>Trends for you</h3>
              <img src={settings} alt="settings" width={24} height={24} />
            </div>
            <div className='flex justify-between items-start mb-[15px]'>
              <div className=''>
                <span className='font-normal text-[16px] text-[#393B41] opacity-[60%]'>Trending in Germany</span>
                <p className='font-semibold text-[20px] text-[#000]'>Revolution</p>
                <span className='font-normal text-[16px] text-[#393B41] opacity-[60%]'>50.4K Tweets</span>
              </div>
              <div className='pt-[18px]'><DotsIcon/></div>
            </div>
            <div className='flex justify-between items-start mb-[15px]'>
              <div className=''>
                <span className='font-normal text-[16px] text-[#393B41] opacity-[60%]'>Trending in Germany</span>
                <p className='font-semibold text-[20px] text-[#000]'>Revolution</p>
                <span className='font-normal text-[16px] text-[#393B41] opacity-[60%]'>50.4K Tweets</span>
              </div>
              <div className='pt-[18px]'><DotsIcon/></div>
            </div>
            <div className='flex justify-between items-start mb-[30px]'>
              <div className=''>
                <span className='font-normal text-[16px] text-[#393B41] opacity-[60%]'>Trending in Germany</span>
                <p className='font-semibold text-[20px] text-[#000]'>Revolution</p>
                <span className='font-normal text-[16px] text-[#393B41] opacity-[60%]'>50.4K Tweets</span>
              </div>
              <div className='pt-[18px]'><DotsIcon/></div>
            </div>
            <Link className=' text-blue-500 ' href="#">Show More</Link>
          </div>
          <div className='space-y-[25px] px-[15px] rounded-[10px] bg-[#EFF3F4]'>
            <h3 className='pt-[20px] font-bold text-[24px]'>You might like</h3>
            <div className='flex justify-between'>
              <img src={mushtariy} alt="mushtariy" width={40} height={40}/>
              <div>
                <p className='font-bold text-[16px] text-[#000]'>Mushtariy</p>
                <span className='font-normal text-[16px] text-[#000] opacity-[40%]'>@mushtariy565266</span>
              </div>
              <Button title={'Follow'} extrastyle={'w-[92px] !py-[3px] text-[16px] text-white font-normal bg-black'}/>
            </div>
            <div className='flex justify-between'>
              <img src={shuhrat} alt="mushtariy" width={40} height={40}/>
              <div>
                <p className='font-bold text-[16px] text-[#000]'>Shuhrat</p>
                <span className='font-normal text-[16px] text-[#000] opacity-[40%]'>@mrshukhrat</span>
              </div>
              <Button title={'Follow'} extrastyle={'w-[92px] !py-[3px] text-[16px] text-white font-normal bg-black'}/>
            </div>
            <a className='text-blue-500 mt-[30px] inline-block pb-[25px]' href="#">Show more</a>
          </div>
        </div>
      </div>
    </div>
  )
}
