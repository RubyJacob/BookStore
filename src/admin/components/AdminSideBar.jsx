import React from 'react'
import { FaBookReader, FaHome } from 'react-icons/fa'
import { FaGear } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function AdminSideBar() {
  return (
    <div className='bg-blue-100 min-h-screen md: flex flex-col text-center'>
    {/* admin image */}
     <div className='flex justify-center items-center my-10'>
       <img width={'150px'} height={'150px'} style={{borderRadius:'50%'}} src="https://tse2.mm.bing.net/th/id/OIP.IUoSLt3fn22RIymLIRhfPAHaJh?w=498&h=640&rs=1&pid=ImgDetMain&o=7&rm=3" alt="user" />
     </div>
     {/* name */}
     <h1 className='font-bold text-2xl mb-5'>Name</h1>
     {/* links */}
     <div className='mt-10 flex flex-col justify-center items-center'>
      <div className='mb-3'>
        <Link to={'/admin/home'} className='flex items-center text-xl'><FaHome className='text-xl me-2'/> Dashboard</Link>
      </div>
      <div className='mb-3'>
        <Link to={'/admin/resources'} className='flex items-center text-xl'><FaBookReader className='text-xl me-2'/> Resources</Link>
      </div>
      <div className='mb-3'>
        <Link to={'/admin/profile'} className='flex items-center text-xl'><FaGear className='text-xl me-2'/>Settings</Link>
      </div>

     </div>
    </div>
  )
}

export default AdminSideBar