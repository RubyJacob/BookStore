import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FaBackward } from 'react-icons/fa'

function PaymentSuccess() {
  return (
    <>
    <Header/>
    <div className='min-h-screen flex justify-center items-center md:px-20 px-5'>
        <div className='md:grid grid-cols-2 gap-10'>
            <div>
                <h1 className='text-5xl text-blue-600 pb-5'>Congratulations !!!</h1>
                <h2 className='text-2xl pb-5'>Thank you for purchasing with Bookstore.Hope you had a good time with Us.</h2>
                <Link to={'/books'} className='bg-blue-700 text-white p-2 w-60 flex items-center gap-3'><FaBackward/> Explore more books </Link>
            </div>
        </div>
    </div>
    <Footer/>
    
    </>
  )
}

export default PaymentSuccess