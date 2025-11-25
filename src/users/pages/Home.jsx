import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'

function Home() {
  return (
    <>
    <Header/>
     <div>
      {/* landing part */}
      <div style={{height:'500px'}} className='flex justify-center items-center flex-col bg-[url(/background-image.png)] bg-cover bg-center text-white'>
          <div style={{height:'500px',backgroundColor:'rgba(0,0,0,0.3)'}} className='flex justify-center items-center flex-col w-full text-white'>
            <h1 className='text-5xl font-bold mb-2'>Wonderful Gifts</h1>
            <p className='text-xl'>Gift your family and friends a book</p>
            {/* search */}
            <div className='mt-8 flex items-center'>
            <input type="text" placeholder='Search Books here' className='bg-white rounded-3xl text-black w-100 placeholder-gray-500 p-2'/>
            <FaSearch className='text-gray-500' style={{marginLeft:'-40px'}}/>
             </div>
          </div>
      </div>
      {/* new arrival */}
      <section  className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
        <h1 className="text-5xl font-bold">New Arrivals</h1>
        <h2 className="text-3xl my-3">Explore Our Latest Collections</h2>
      </section>t
      {/* author */}
      {/* testomy */}
     </div>
   <Footer/> 
    </>
  )
}

export default Home