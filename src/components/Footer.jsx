import React from 'react'
import { FaArrowRight, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaFacebook, FaXTwitter } from 'react-icons/fa6'

function Footer() {
  return (
   <div >
      <div  className='mt-auto' >
        <div className='grid sm:grid-cols-1 md:grid-cols-3 bg-black text-white p-5'>
          <div className='flex flex-col items-center justify-items-start'>
            <h1 className='text-2xl px-5 py-2 '>ABOUT US</h1>
            <p className='text-xl leading-9 p-5 justify-center'>What started as a small collection of pre-loved books has grown into a cozy space where stories find new homes. We bring quality second-hand books to readers at budget-friendly prices, while promoting the joy of reading and eco-friendly living.</p>
          </div>
         <div className='flex flex-col items-center justify-items-start'>
            <h1 className='text-2xl px-5 py-2'>NEWSLETTER</h1>
            <p className='text-xl p-5'>Stay Updated with oru latest trends</p>
            <div className='flex items-center mx-5 mb-3'>
               <input type="text" placeholder='Email ID' className='p-3 bg-white placeholder-gray-500 ' />
               <button className='bg-yellow-400 p-4'><FaArrowRight/></button>
            </div>
         </div>
         <div className='flex flex-col items-center'>
            <h1 className='text-2xl px-5 py-2'>FOLLOW US</h1>
            <p className='text-xl py-3'>Let us be social</p>
            <div className='flex px-5 py-2 '>
              <FaInstagram className='mx-1 text-3xl'/>
              <FaXTwitter className='mx-1 text-3xl'/>
              <FaFacebook className='mx-1 text-3xl'/>
              <FaLinkedin className='text-3xl'/>
            </div>
         </div>
        </div>
      </div>
   </div>
  )
}

export default Footer