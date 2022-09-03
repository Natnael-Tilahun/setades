import React from 'react'
import { BsFacebook,BsTelegram,BsYoutube } from 'react-icons/bs';
import {SiGmail} from 'react-icons/si'
import {FaTiktok} from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='bg-slate-300 h-[calc(100vh-64px)] bg-[url(/img3.png)] bg-no-repeat w-full bg-center md:relative'>
      <div className='hidden fixed bottom-[screen] md:absolute md:top-[57%] md:left-[13%] md:flex gap-3 border-2 border-gray-500 text-gray-500 p-2 px-10 rounded-md'>
        <BsTelegram size={20} className='hover:text-white '/>
        <BsFacebook size={20} className='hover:text-white '/>
        <BsYoutube size={20} className='hover:text-white '/>
        <SiGmail size={20} className='hover:text-white '/>
        <FaTiktok size={20} className='hover:text-white '/>

      </div>

    </div>
  )
}

export default Hero