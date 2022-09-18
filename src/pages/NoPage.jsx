import React from 'react'
import { Link } from 'react-router-dom'

const NoPage = () => {
  return (
    <div className='h-72 p-20'>

      <h1 className='text-center font-bold text-4xl animate-pulse'>404</h1>
      <p className='text-center pt-3 text-gray-500'>Lets back to <Link to="/" className='text-gray-700 underline'>Home</Link></p>
    </div>
  )
}

export default NoPage