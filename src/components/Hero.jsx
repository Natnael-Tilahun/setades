import React from 'react'
import { BsFacebook,BsTelegram,BsYoutube } from 'react-icons/bs';
import {SiGmail} from 'react-icons/si'
import {FaTiktok} from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='bg-slate-300 h-[calc(100vh-64px)] bg-[url(/img3.png)] bg-no-repeat w-full bg-center md:relative'>
      <div className='hidden md:visible md:flex flex-col gap-6 fixed bottom-[screen] md:absolute md:top-[25%] md:right-[0%]  text-gray-700 p-2 px-10 rounded-md '>
        <BsTelegram size={40} className='hover:text-white animate-bounce '/>
        <BsFacebook size={40} className='hover:text-white animate-bounce '/>
        <BsYoutube size={40} className='hover:text-white animate-bounce '/>
        <SiGmail size={40} className='hover:text-white animate-bounce '/>
        <FaTiktok size={40} className='hover:text-white animate-bounce '/>
      </div>
    </div>
  )
}

export default Hero