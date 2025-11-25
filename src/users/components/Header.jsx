import React, { useState } from 'react'
import { FaBars, FaFacebook, FaInstagram, FaUser } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router'

function Header() {
    const[listStatus,setListStatus] = useState(false)
    const menuBtnClick =() =>{
        setListStatus(!listStatus)
    }
  return (
    <>
    {/* upper part-title & logo */}
    <div className='grid grid-cols-3 p-2'>
        {/* logo with title */}
        <div className="flex items-center">
            <img width={'80px'} height={'80px'} src="https://cdn.vectorstock.com/i/500p/11/48/cartoon-stack-of-books-icon-vector-51211148.jpg" alt="" />
            <h1 className="text-2xl font-bold ms-1 md:hidden">
                BOOKSTORE
            </h1>
        </div>
        {/* title */}
        <div className="md:flex justify-center items-center hidden">
            <h1 className='text-3xl font-bold'>BOOKSTORE</h1>
        </div>
        {/* LOGIN */}
        <div className= "md:flex justify-end items-center hidden">
            <FaInstagram/>
            <FaFacebook className='mx-1'/>
            <FaXTwitter/>
            <Link to={'/login'} className='ms-4 border rounded px-2 py-1 flex items-center hover:bg-black hover:text-white '><FaUser className='mx-1'/> Login</Link>
        </div>
    </div>
    {/* lower part */}
    <nav className='w-full p-3 bg-black text-white md:flex justify-center items-center'>
        <div className="flex justify-between items-center text-2xl md:hidden">
            {/* menu bar */}
            <button onClick={menuBtnClick} className='cursor-pointer'><FaBars/></button>
            {/* login link */}
             <Link to={'/login'} className='ms-4 border rounded px-2 py-1 flex items-center hover:bg-white hover:text-black'><FaUser className='me-1'/> Login</Link>
        </div>
        <ul className={listStatus?"flex flex-col":'md:flex justify-center items-center hidden'}>
            <li><Link to={'/'}className='md:mx-4 mt-3 md:mt-0'>HOME</Link></li>
             <li><Link to={'/books'}className='md:mx-4 my-3 md:my-0'>BOOKS</Link></li>
              <li><Link to={'/contact'}className='md:mx-4 mb-3 md:mb-0'>CONTACT</Link></li>
        </ul>
    </nav>
    </>
  )
}

export default Header