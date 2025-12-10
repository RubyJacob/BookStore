import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { FaX ,FaPen} from 'react-icons/fa6'

function Edit() {
  const [offcanvasStatus,setOffcanvas] = useState(false)
  return (
    <div>
        {/* Edit button */}
        <button onClick={()=>setOffcanvas(true)} className='flex items-center text-blue-400 gap-3 text-xl border rounded px-3 py-2'>Edit <FaEdit className='text-xl'/></button>
        {/* offcanvas */}
      { offcanvasStatus && <div>
            <div className="fixed inset-0 bg-gray-500/75 w-full h-full"></div>
            <div className='bg-white h-full z-50 w-90 fixed top-0 left-0'>
            {/* header */}
            <div className="bg-black p-3 flex justify-between text-white">
                <h1 className='text-2xl'>Update Profile</h1>
                <button onClick={()=>setOffcanvas(false)}><FaX/></button>
            </div>
            {/* body */}
            <div className='flex justify-center items-center flex-col my-5'>
              {/* image */}
              <label htmlFor="uploadimg">
                <input type="file" id='uploadimg' hidden />
                 <img style={{width:'150px',height:'150px',borderRadius:'50%'}} src="https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg" alt="profile" />
              </label>
               <button style={{marginTop:'-20px'}} className='bg-yellow-300 p-2 border rounded'><FaPen/></button>
              {/* name */}
              <div className="mt-10 mb-3 w-full px-5">
                <input type="text" placeholder='Username' className='border rounded border-gray-200 p-2 w-full ' />
              </div>
               {/* new password */}
              <div className=" mb-3 w-full px-5">
                <input type="password" placeholder='New Password' className='border rounded border-gray-200 p-2 w-full ' />
              </div>
               {/* confirm password */}
              <div className=" mb-3 w-full px-5">
                <input type="password" placeholder='Confirm Password' className='border rounded border-gray-200 p-2 w-full ' />
              </div>
               {/* Bio */}
              <div className=" mb-3 w-full px-5">
                <textarea type="text" rows={3} placeholder='Bio' className='border rounded border-gray-200 p-2 w-full ' />
              </div>
              <div className="mb-5 ml-20 flex justify-end gap-3">
                  <button className='bg-red-700 p-2 border rounded text-white'>RESET</button>
                  <button className='bg-green-700 p-2 border rounded text-white'>SUBMIT</button>
              </div>
            </div>
            </div>
        </div>
      }
    </div>
  )
}

export default Edit