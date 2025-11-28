import React from 'react'
import { FaEdit } from 'react-icons/fa'

function Edit() {
  return (
    <div>
        {/* Edit button */}
        <button className='flex items-center text-blue-400 gap-3 text-xl border rounded px-3 py-2'>Edit <FaEdit className='text-xl'/></button>
        {/* offcanvas */}
        <div>
            <div className="fixed inset-0 bg-gray-500/75 w-full h-full"></div>
            <div className='bg-white h-full z-50 w-90 fixed top-0 left-0'>
            {/* header */}
            <div className="bg-black p-3">
                <h1 className='text-white text-2xl'>Edit</h1>
            </div>
            {/* body */}
            </div>
        </div>
    </div>
  )
}

export default Edit