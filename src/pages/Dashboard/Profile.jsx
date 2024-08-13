import React from 'react'
import { AddDateIcon, BornIcon, LinkIcon, LocationIcon, ModeIcon } from '../../assets/Images/Icons'
import Bg from '../../assets/Images/bg.png'
import avatar from '../../assets/Images/avatar.svg'
import Button from '../../components/button'
import { Link, Outlet } from 'react-router-dom'
import settings from '../../assets/Images/settings.svg'
import mushtariy from '../../assets/Images/mushtariy.svg'
import shuhrat from '../../assets/Images/shuhrat.svg'
import { DotsIcon } from '../../assets/Images/Icons'
import Png from '../../assets/Images/about.png'


export default function Profile() {
  return (
    <div className='w-[85%] flex'>
      <div className='w-[72%] border-r-[1px] border-r-slate-400 h-screen overflow-y-auto'>
        <div className='sticky top-0 z-40 bg-white p-[20px] border-b-[1px] border-b-slate-400 flex justify-between'>
        <div>
          <h2 className='font-bold text-[24px] '>Profile</h2>
          <span className='font-normal text-[16px]'>1,070 Tweets</span>
        </div>
          <button>
            <ModeIcon/>
          </button>
        </div>
        <img src={Bg} alt="bg" />
        <div className='flex px-[25px]  justify-between items-end -translate-y-[80px]'>
          <img src={avatar} alt="ava" width={150} height={150} />
          <Button title={'Edit profile'} extrastyle={'h-auto bg-transparent border-[1px] border-[#000] py-[10px] w-[120px] !text-black pb-[11px]'}/>
        </div>
        <div className='-translate-y-[70px] px-[25px] '>
          <div className='mb-[15px]'>
            <p className='font-bold text-[24px] text-[#000]'>Bobur</p>
            <span className='font-normal text-[16px] opacity-[60%] text-[#000]'>Bobur Mavlonov</span>
          </div>
          <div className='flex gap-[3px] mb-[15px]'>
            <p className='font-normal text-[18px] text-[#000]'>UX&UI designer at </p>
            <a className='font-normal text-[18px] text-[#1DA1F2]' href="#">  @abutechuz</a>
          </div>
          <div className='flex justify-between'>
            <div className='flex gap-[5px] items-center'>
              <LocationIcon/>
              <p>Mashagdaman</p>
            </div>
            <div className='flex gap-[5px] items-center'>
              <LinkIcon/>
              <p>t.me/boburjon_mavlonov</p>
            </div>
            <div className='flex gap-[5px] items-center'>
              <BornIcon/>
              <p>Born November 24, 2000</p>
            </div>
            <div className='flex gap-[5px] items-center'>
              <AddDateIcon/>
              <p>Joined May 2020</p>
            </div>
          </div>
        </div>
        <div className='-translate-y-[60px] flex px-[25px] gap-[30px]'>
          <p><span className='font-bold'>67</span> Following</p>
          <p><span className='font-bold'>47</span> Followers</p>
        </div>
        <div className='flex justify-between px-[25px] -translate-y-[50px] pb-[15px]'>
          <Link to={''} className='font-normal text-[18px]'>Tweets</Link>
          <Link to={'tweets-replies'} className='font-normal text-[18px]'>Tweets&Replies</Link>
          <Link to={'media'} className='font-normal text-[18px]'>Media</Link>
          <Link to={'likes'} className='font-normal text-[18px]'>Likes</Link>
        </div>
        <Outlet/>
      </div>
      <div className='w-[32%] pl-[28px] pt-[20px] overflow-y-auto h-screen'>
        <div className='flex flex-col space-y-[20px]'>
          <input type="text" placeholder='Search Twitter' className='w-full py-[15px] font-normal text-[18px] placeholder:text-[#5C6C79]  text-[#5C6C79] bg-[#EFF3F4] rounded-[31px] pl-[20px]'   />
          <img src={Png} alt="img" />
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
        </div>
      </div>
    </div>  
  )
}
