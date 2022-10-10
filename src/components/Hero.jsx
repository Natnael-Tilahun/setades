import React from 'react'
import { BsFacebook,BsTelegram,BsYoutube,BsInstagram,BsTwitter,BsWhatsapp } from 'react-icons/bs';
import {SiGmail} from 'react-icons/si'
import {FaTiktok} from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='bg-slate-300 h-[calc(100vh-64px)] bg-[url(/img3.png)] bg-no-repeat w-full bg-center md:relative'>
      <div className='hidden md:visible md:flex flex-col gap-6 fixed bottom-[screen] md:absolute md:top-[25%] md:right-[0%]  text-gray-700 p-2 px-10 rounded-md '>
        <a target="__blank" href='https://t.me/Feva_strings'><BsTelegram size={40} className='hover:text-white animate-bounce '/></a>
        <a target="__blank" href='https://www.facebook.com/feven132tad'><BsFacebook size={40} className='hover:text-white animate-bounce '/></a>
        <a target="__blank" href='https://youtube.com/channel/UCro4G-tXDqOtZY7S-sPCdMQ'><BsYoutube size={40} className='hover:text-white animate-bounce '/></a>
        <a target="__blank" href='mailto:feven@setadess.com'><SiGmail size={40} className='hover:text-white animate-bounce '/></a>
        <a target="__blank" href='https://vm.tiktok.com/ZMF2HP38o/'><FaTiktok size={40} className='hover:text-white animate-bounce '/></a>
        <a target="__blank" href='https://www.instagram.com/p/ChSt44LIE3r/?igshid=YmMyMTA2M2Y='><BsInstagram size={40} className='hover:text-white animate-bounce '/></a>
        <a target="__blank" href='https://twitter.com/Diva1234Tad?t=8jI-ZkVvLaPgjZKxYn5iQw&s=09'><BsTwitter size={40} className='hover:text-white animate-bounce '/></a>
        <a target="__blank" href='https://wa.me/qr/26OAU4YRL7UFJ1'><BsWhatsapp size={40} className='hover:text-white animate-bounce '/></a>
      </div>
    </div>
  )
}

export default Hero