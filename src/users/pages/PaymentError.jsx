import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FaBackward } from 'react-icons/fa'


function PaymentError() {
  return (
   <>
    <Header/>
    <div className='min-h-screen flex justify-center items-center md:px-20 px-5'>
        <div className='md:grid grid-cols-2 gap-10'>
            <div>
                <h1 className='text-5xl text-red-600 pb-5'>Sorry !!! Payment Failed</h1>
                <h2 className='text-2xl pb-5'>We Apologize for the inconvinence caused and appreciate your visit to Bookstore.</h2>
                <Link to={'/books'} className='bg-red-500 text-white p-2 w-60 flex items-center gap-3'><FaBackward/> Explore more books </Link>
            </div>
        </div>
    </div>
    <Footer/>
    
    </>
  )
}

export default PaymentError