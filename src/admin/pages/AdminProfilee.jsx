import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSideBar'
import Footer from '../../components/Footer'
import { FaPen } from 'react-icons/fa'

function AdminProfilee() {
  return (
    <>
    <AdminHeader/>
    <div className='md:grid grid-cols-5'>
      <div className='col-span-1'>
         <AdminSideBar/>
      </div>
      <div className='col-span-4 p-10'>
       <h1 className='text-center my-5 font-bold text-4xl'>Settings</h1>
       {/* text */}
       <div className='md:grid grid-cols-2 items-center flex-col'>
        <div>
          <h1 className='my-5 text-xl font-bold'>Welcome to Admin Settings Panel</h1>
          <p className='text-xl'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat beatae quia blanditiis hic neque harum dolorum doloremque excepturi quis earum! Ipsum alias quas sit est consequatur ut debitis obcaecati modi!
          Doloremque ratione quod eveniet vero optio voluptate, animi similique deserunt? Corrupti explicabo temporibus soluta nemo dolorem? Sapiente possimus, ex aut omnis modi officiis. Tempore in pariatur blanditiis minus aperiam recusandae!</p>
        </div>
        {/* form */}
         <div className='flex justify-center items-center flex-col my-5 bg-blue-100'>
              {/* image */}
              <label htmlFor="uploadimg">
                <input type="file" id='uploadimg' hidden />
                 <img style={{width:'150px',height:'150px',borderRadius:'50%'}} className='mt-4' src="https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg" alt="profile" />
              </label>
              <button style={{marginTop:'-20px'}} className='bg-yellow-300 p-2 border rounded'><FaPen/></button>
              {/* name */}
              <div className="mt-10 mb-3 w-full px-5">
                <input type="text" placeholder='Username' className='border rounded border-gray-200 p-2 w-full bg-white' />
              </div>
               {/* new password */}
              <div className=" mb-3 w-full px-5">
                <input type="password" placeholder='New Password' className='border rounded border-gray-200 p-2 w-full bg-white ' />
              </div>
               {/* confirm password */}
              <div className=" mb-3 w-full px-5">
                <input type="password" placeholder='Confirm Password' className='border rounded border-gray-200 p-2 w-full bg-white' />
              </div>
              <div className="mb-5 ml-20 flex justify-end gap-3">
                  <button className='bg-red-700 p-2 border rounded text-white'>RESET</button>
                  <button className='bg-yellow-500 p-2 border rounded text-white'>UPDATE</button>
              </div>
            </div>

       </div>
       <div>

       </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default AdminProfilee