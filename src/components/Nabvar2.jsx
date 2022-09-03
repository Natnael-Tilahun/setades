import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa';
const Nabvar = () => {
  return (
    <div className='w-full flex h-16 bg-[#fcd5d5] drop-shadow-md text-white font-bold items-center justify-between px-32 text-lg '>
      <a href=""><img src="img.jpg" alt="" className='w-14 rounded-md' /></a>
      <div className='flex gap-9'>
        <a href='#' className='active:border-b-2 hover:border-b-2 hover:text-black border-black'>Home</a>
        <a href='#' className='active:border-b-2 hover:border-b-2 hover:text-black border-black'>Products</a>
      </div>      
    </div>
  )
}

export default Nabvar