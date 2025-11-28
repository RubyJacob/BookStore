import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaCamera, FaEye } from 'react-icons/fa'
import { Link } from 'react-router'
import { FaBackward, FaX } from 'react-icons/fa6'

function View() {

  const [modalStatus, setModalStatus] = useState(false)
  return (
    <>
    <Header/>
    {/* view page */}
    <div className='md:m-10 m-5'>
      <div className='shadow border p-5 border-gray-500'>
        <div className='md: grid grid-cols-4 gap-x-10'>
          {/* image col */}
            <div className="col-span-1">
              <img className='w-full' src="https://tse3.mm.bing.net/th/id/OIP.O_5w60OzA93YxcPlYTOiaAHaLH?w=933&h=1400&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
            </div>
            {/* book details col */}
            <div className='col-span-3'>
              <div className='flex justify-between items-center mt-5 md:mt-0'>
                <h1 className='text-2xl font-bold'>Book-Title</h1>
                <button onClick={()=>setModalStatus(true)} className='text-gray-400'><FaEye/></button>
              </div>
             <h1 className='text-xl text-blue-500 my-2'>- Author</h1>
             <div className='md:grid grid-cols-3 gap-5 my-10'>
                <p className='font-bold text-xl'>Publisher : </p>
                <p className='font-bold text-xl'>Language : </p>
                <p className='font-bold text-xl'>No. of Pages : </p>
                <p className='font-bold text-xl'>Original Price : </p>
                <p className='font-bold text-xl'>ISBN : </p>
                <p className='font-bold text-xl'>Category : </p>
                <p className='font-bold text-xl'>Seller : </p>
             </div>
             <div className='md:my-10 my-4'>
                <p className='font-bold text-xl'>Abstract</p>
             </div>
              <div className='flex justify-end'>
                <Link to={'/books'} className='bg-blue-700 px-7 py-2 text-white ms-5 rounded'><FaBackward className='me-2 '/>Back</Link>
                <button className='bg-green-700 p-2 rounded text-white ms-5'>Buy $ 300</button>
              </div>
            </div>
        </div>

      </div>

    </div>
    {/* modal */}
     {  modalStatus &&
      <div onClick={()=>setModalStatus(false)} className='relative z-10'>
          <div className='bg-gray-500/75 fixed inset-0'>
                <div className='flex justify-center items-center min-h-screen'>
                  <div className='bg-white rounded-2xl md:w-250 w-100'>
                    {/* modal title */}
                    <div className='bg-black text-white p-3 flex justify-between items-center'>
                        <h3>Books Images</h3>
                        <FaX  onClick={()=>setModalStatus(false)}/>
                    </div>
                    {/* modal body */}
                    <div className='relative p-5'>
                      <p className='text-blue-500 flex gap-3 items-center'><FaCamera/>Camera clicks of the book in the hand of seller</p>
                     {/* book images in row */}
                      <div className='md:flex flex-wrap my-5'>
                        <img className='md:w-75 w-25 md:me-2 mb-3 md:mb-0' src="https://tse3.mm.bing.net/th/id/OIP.O_5w60OzA93YxcPlYTOiaAHaLH?w=933&h=1400&rs=1&pid=ImgDetMain&o=7&rm=3" alt="book" />
                        <img className='md:w-75 w-25 md:me-2 mb-3 md:mb-0' src="https://tse3.mm.bing.net/th/id/OIP.O_5w60OzA93YxcPlYTOiaAHaLH?w=933&h=1400&rs=1&pid=ImgDetMain&o=7&rm=3" alt="book" />
                        <img className='md:w-75 w-25 md:me-2 mb-3 md:mb-0' src="https://tse3.mm.bing.net/th/id/OIP.O_5w60OzA93YxcPlYTOiaAHaLH?w=933&h=1400&rs=1&pid=ImgDetMain&o=7&rm=3" alt="book" />
                      </div>
                    </div>
                  </div>

                </div>
          </div>
      </div>}

    <Footer/>
    </>
  )
}

export default View