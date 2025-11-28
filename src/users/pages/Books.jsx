import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router'

function Books() {
  const [showCategory,setShowCategory] = useState(false)
  return (
    <>
    <Header/>
     <>
     {/*login - book page */}
     <div className='flex flex-col justify-center items-center my-5'>
      {/* title */}
      <h1 className='text-3xl font-bold my-5'>ALL BOOKS</h1>
      {/* search box */}
     <div className='flex my-5'>
        <input type="text" placeholder='Search By Title' className='border p-2 w-100 border-gray-400 placeholder-gray-500' />
        <button className='bg-black text-white mx-2 p-2'>Search</button>
     </div>
     </div>
      {/* book and filter row */}
      <div className='md: grid grid-cols-4 md:px-20 p-5 mb-10'>
        {/* filter */}
        <div className="col-span-1">
          {/* filter title */}
          <div className="flex justify-between">
            <h1 className='text-2xl font-bold'>Filter</h1>
            <button onClick={()=>setShowCategory(!showCategory)} className='text-2xl md:hidden'><FaBars/></button>
          </div>
          {/* filter option */}
          <div className={showCategory?"block":'md:block hidden'}>
            {/* category 1 */}
              <div className="mt-3">
                <input type="radio" name='filter' id='all' />
                <label htmlFor="all" className='ms-3'>All</label>
              </div>
              {/* book category */}
               <div className="mt-3">
                <input type="radio" name='filter' id='demo' />
                <label htmlFor="demo" className='ms-3'>Category Name</label>
              </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className='md:grid grid-cols-4 mt-5 md:mt-0'>
            {/* book 1 */}
             <div className="shadow rounded p-3 mx-4">
                 <div className='flex justify-center '><img width={'250px'} height={'250px'} src="https://tse3.mm.bing.net/th/id/OIP.O_5w60OzA93YxcPlYTOiaAHaLH?w=933&h=1400&rs=1&pid=ImgDetMain&o=7&rm=3" alt="book"/></div>
             <div className="flex justify-center items-center flex-col">
               <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
               <h4 className='text-lg'>title</h4>
               <Link to={'/books/:id/view'} className='px-5 py-2 mt-2 text-white bg-blue-500'>View</Link>
             </div>
            </div>
            {/* book 2 */}
             <div className="shadow rounded p-3 mx-4">
                 <div className='flex justify-center '><img width={'250px'} height={'250px'} src="https://tse3.mm.bing.net/th/id/OIP.O_5w60OzA93YxcPlYTOiaAHaLH?w=933&h=1400&rs=1&pid=ImgDetMain&o=7&rm=3" alt="book"/></div>
             <div className="flex justify-center items-center flex-col">
               <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
               <h4 className='text-lg'>title</h4>
               <Link to={'/books/:id/view'} className='px-5 py-2 mt-2 text-white bg-blue-500'>View</Link>
             </div>
            </div>
            {/* book 3 */}
             <div className="shadow rounded p-3 mx-4">
                 <div className='flex justify-center '><img width={'250px'} height={'250px'} src="https://tse3.mm.bing.net/th/id/OIP.O_5w60OzA93YxcPlYTOiaAHaLH?w=933&h=1400&rs=1&pid=ImgDetMain&o=7&rm=3" alt="book"/></div>
             <div className="flex justify-center items-center flex-col">
               <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
               <h4 className='text-lg'>title</h4>
               <Link to={'/books/:id/view'} className='px-5 py-2 mt-2 text-white bg-blue-500'>View</Link>
             </div>
            </div>
            {/* book 4 */}
             <div className="shadow rounded p-3 mx-4">
                 <div className='flex justify-center '><img width={'250px'} height={'250px'} src="https://tse3.mm.bing.net/th/id/OIP.O_5w60OzA93YxcPlYTOiaAHaLH?w=933&h=1400&rs=1&pid=ImgDetMain&o=7&rm=3" alt="book"/></div>
             <div className="flex justify-center items-center flex-col">
               <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
               <h4 className='text-lg'>title</h4>
               <Link to={'/books/:id/view'} className='px-5 py-2 mt-2 text-white bg-blue-500'>View</Link>
             </div>
            </div>

          </div>
        </div>
      </div>


     </>
     {/* not login -book page */}
    <Footer/>
    </>
  )
}

export default Books