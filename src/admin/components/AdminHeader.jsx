import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

function AdminHeader() {
  return (
    <>
    {/* header part */}
      <div className='flex justify-between items-center p-3 md:px-20'>
        {/* logo with title */}
        <div className='flex items-center'>
             <img width={'80px'} height={'80px'} src="https://cdn.vectorstock.com/i/500p/11/48/cartoon-stack-of-books-icon-vector-51211148.jpg" alt="" />
              <p className='font-bold text-2xl'>BOOKSTORE</p>
        </div>
        {/* logout */}
        <button className='flex items-center bg-black text-white p-2 border rounded'><FaPowerOff className='me-2'/> Logout</button>
      </div>
      {/* header lower part */}
      <div className='bg-black p-2'>
         <marquee> <p className='text-white text-xl'>Welcome Admin !! You are all set to manage and monitor the system. Let's get into work.</p></marquee>
      </div>
    </>
  )
}

export default AdminHeader