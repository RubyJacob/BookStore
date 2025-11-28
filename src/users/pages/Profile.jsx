import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaCircleCheck } from 'react-icons/fa6'
import Edit from '../components/Edit'
import SellBook from '../components/SellBook'
import BookStatus from '../components/BookStatus'
import Purchase from '../components/Purchase'


function Profile() {
    const [tab,setTab] = useState(1)
  return (
    <>
    <Header/>
    {/* black div */}
    <div style={{height:'200px'}} className='bg-black'></div>
    {/* profile image */}
    <div style={{width:'230px',height:'230px',borderRadius:'50%',marginLeft:'70px',marginTop:'-130px'}} className='bg-white p-3'>
        <img style={{width:'200px',height:'200px',borderRadius:'50%'}} src="https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg" alt="profile" />
    </div>
      {/* name with edit */}
      <div className='md:flex justify-between items-center my-5 md:px-10 px-5 '>
        <h1 className='text-2xl font-bold flex items-center mx-5 md:mx-20'>Username <FaCircleCheck className='text-blue-400 ms-5'/></h1>
        <Edit/>
      </div>
      <p className="text-justify md:px-20 px-5 pb-10  text-xl">
        At our bookstore, we believe that every book holds the power to spark imagination, inspire minds, and open doors to new worlds. What began as a small passion project has grown into a warm, welcoming space where readers of all ages can discover stories they’ll cherish. From timeless classics to modern bestsellers, we handpick each title to ensure a diverse and enriching collection. Whether you’re a curious learner, an avid reader, or someone searching for the perfect gift, our bookstore is dedicated to helping you find the book that feels just right.
      </p>
      {/* tabs */}
      <div className='md:px-40'>
          <div className='flex justify-center items-center my-8 font-medium text-xl'>
            <p onClick={()=>setTab(1)} className={tab==1 ?'text-blue-600 border-gray-400 border-t border-l border-r p-4 cursor-pointer':'border-gray-200 border-b p-4 cursor-pointer'}>Sell Books</p>
            <p onClick={()=>setTab(2)} className={tab==2 ?'text-blue-600 border-gray-400 border-t border-l border-r p-4 cursor-pointer':'border-gray-200 border-b p-4 cursor-pointer'}>Book status</p>
            <p onClick={()=>setTab(3)} className={tab==3 ?'text-blue-600 border-gray-400 border-t border-l border-r p-4 cursor-pointer':'border-gray-200 border-b p-4 cursor-pointer'}>Purchase History</p>
          </div>
          {/* tab contents */}
          { 
             tab==1 &&
            <SellBook/>
          }
          { 
            tab==2 &&
            <BookStatus/>
          }
          {
            tab==3 &&
           <Purchase/>
          }
      </div>
    <Footer/>
    </>
  )
}

export default Profile