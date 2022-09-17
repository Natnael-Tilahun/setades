import React from 'react'
import { BsFacebook,BsTelegram,BsYoutube,BsTwitter,BsLinkedin,BsPinterest } from 'react-icons/bs';
import {SiGmail} from 'react-icons/si'
import {FaTiktok} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='bg-black h-auto w-full flex flex-col justify-center p-12 text-gray-300 tracking-widest'>
        <div className='flex border-b-2 border-gray-600 flex-wrap'>
            <div className=' basis-1/3 pb-5'>
                <h1 className='font-bold text-xl pb-2'>Connect with Us</h1>
                <ul className=' text-gray-300 flex gap-2'>
                    <li><BsTelegram size={25} className="hover:text-red-300 text-[#19B7EA]"/></li>
                    <li><BsFacebook size={25} className="hover:text-red-300 text-[#1778F2]"/></li>
                    <li><SiGmail size={25} className="hover:text-red-300 text-[#EA4335]"/></li>
                    <li><BsYoutube size={25} className="hover:text-red-300 text-[#FF0000]"/></li>
                    <li><FaTiktok size={25} className="hover:text-red-300 text-[#FFFFFF]"/></li>
                    <li><BsTwitter size={25} className="hover:text-red-300 text-[#55ACEE]"/></li>
                    <li><BsLinkedin size={25} className="hover:text-red-300 text-[#006192]"/></li>
                    <li><BsPinterest size={25} className="hover:text-red-300 text-[#BE0215]"/></li>

                </ul>
            </div>
            <div className=' basis-1/3 pb-5'>
                <h1 className=' font-bold text-xl pb-2'>Contact Us</h1>
                <h1 className='text-gray-300'>PHONE : <span className='text-lg tracking-widest'>0933654654</span></h1>
                <h1 className='text-gray-300'>EMAIL : <span className='text-lg tracking-widest'>feven@gmail.com</span></h1>
            </div>
            <div className='basis-1/3 pb-2'>
                <h1 className=' font-bold text-xl pb-1'>More</h1>
                <h1 className='uppercase text-gray-300'>FAQ</h1>
            </div>
        </div>
        {/* <hr /> */}
        <h1 className='pt-5'>Setades@2022. All right reserved.</h1>
        
    </div>
  )
}

export default Footer