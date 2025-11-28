import React from 'react'
import { Link } from 'react-router'

function Pnf() {
  return (
    <div className='h-screen flex flex-col justify-content items-center '>
        <img className='p' src="/pnf.png" alt="" />
        <h1 className='text-xl'>Oh No !!</h1>
        <h1 className='text-5xl font-bold'>Looks Like You're Lost</h1>
        <p className='text-xl py-2 mb-3'>The page you are looking for is not available</p>
        <Link to={'/'} className='bg-sky-600 text-white px-5 py-3 border text-xl'>Back Home</Link>
    </div>
  )
}

export default Pnf