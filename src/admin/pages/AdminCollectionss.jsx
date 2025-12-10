import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSideBar'
import Footer from '../../components/Footer'

function AdminCollectionss() {
  const [tab,setTab] = useState(1)
  return (
   <>
    <AdminHeader/>
    <div className='md:grid grid-cols-5'>
      <div className='col-span-1'>
         <AdminSideBar/>
      </div>
      <div className='col-span-4 p-10'>
       <h1 className='my-5 text-center text-3xl font-bold'> All Collections</h1>
       {/* tabs */}
       <div className='flex my-5 justify-center items-center'>
        <p onClick={()=>setTab(1)} className={ tab ==1 ?'text-blue-600 font-bold border-r border-l border-t p-2 cursor-pointer text-xl':'border-b font-bold border-gray-200 text-xl p-3'}>Books</p>
        <p onClick={()=>setTab(2)} className={ tab ==2 ?'text-blue-600 font-bold border-r border-l border-t p-2 cursor-pointer text-xl':'border-b font-bold border-gray-200 text-xl p-3'}>Users</p>
       </div>
       {/* tab content */}
       {
         tab==1 && 
         <div className='md:grid grid-cols-4 w-full my-5'>
          {/* duplicate book card */}
          <div className="shadow rounded p-3 mx-4">
                 <div className='flex justify-center '><img width={'250px'} height={'250px'} src="https://tse3.mm.bing.net/th/id/OIP.O_5w60OzA93YxcPlYTOiaAHaLH?w=933&h=1400&rs=1&pid=ImgDetMain&o=7&rm=3" alt="book"/></div>
             <div className="flex justify-center items-center flex-col">
               <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
               <h4 className='text-lg'>title</h4>
               <h4>$price</h4>
               <button className='bg-green-700 p-2 mt-2 text-white border w-full'>APPROVE</button>
             </div>
            </div>
            {/* duplicate book card */}
          <div className="shadow rounded p-3 mx-4">
                 <div className='flex justify-center '><img width={'250px'} height={'250px'} src="https://tse3.mm.bing.net/th/id/OIP.O_5w60OzA93YxcPlYTOiaAHaLH?w=933&h=1400&rs=1&pid=ImgDetMain&o=7&rm=3" alt="book"/></div>
             <div className="flex justify-center items-center flex-col">
               <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
               <h4 className='text-lg'>title</h4>
               <h4>$price</h4>
                <button className='bg-green-700 p-2 mt-2 text-white border w-full'>APPROVE</button>
             </div>
            </div>
            {/* duplicate book card */}
          <div className="shadow rounded p-3 mx-4">
                 <div className='flex justify-center '><img width={'250px'} height={'250px'} src="https://tse3.mm.bing.net/th/id/OIP.O_5w60OzA93YxcPlYTOiaAHaLH?w=933&h=1400&rs=1&pid=ImgDetMain&o=7&rm=3" alt="book"/></div>
             <div className="flex justify-center items-center flex-col">
               <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
               <h4 className='text-lg'>title</h4>
               <h4>$price</h4>
                <button className='bg-green-700 p-2 mt-2 text-white border w-full'>APPROVE</button>
             </div>
            </div>
            {/* duplicate book card */}
          <div className="shadow rounded p-3 mx-4">
                 <div className='flex justify-center '><img width={'250px'} height={'250px'} src="https://tse3.mm.bing.net/th/id/OIP.O_5w60OzA93YxcPlYTOiaAHaLH?w=933&h=1400&rs=1&pid=ImgDetMain&o=7&rm=3" alt="book"/></div>
             <div className="flex justify-center items-center flex-col">
               <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
               <h4 className='text-lg'>title</h4>
               <h4>$price</h4>
                <button className='bg-green-700 p-2 mt-2 text-white border w-full'>APPROVE</button>
             </div>
            </div>
         </div>
       }
        {/* tab content */}
       {
         tab==2 && 
         <div className='md:grid grid-cols-3 w-full my-5'>
              {/* duplicate user card */}
              <div className='rounded bg-gray-200 p-1 text-wrap'>
                <p className='text-red-600 font-bold'>ID : dr5789jsks</p>
                <div className='flex items-center'>
                  {/* userimage */}
                  <img width={'100px'} height={'100px'} style={{borderRadius:'50%'}} src="https://tse2.mm.bing.net/th/id/OIP.IUoSLt3fn22RIymLIRhfPAHaJh?w=498&h=640&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                  {/* content */}
                  <div className='ms-5'>
                    <h4 className='font-bold text-2xl text-blue-800'>name</h4>
                    <p>demo@gmail.com</p>
                  </div>
                </div
               >
              </div>
         </div>
       }
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default AdminCollectionss