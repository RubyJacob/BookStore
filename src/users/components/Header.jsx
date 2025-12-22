import React, { useEffect, useState } from 'react'
import { FaAddressCard, FaBars, FaFacebook, FaInstagram, FaPowerOff, FaUser } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
    const[listStatus,setListStatus] = useState(false)
    const [dp,setDp] = useState("")
    const [token,setToken] = useState("")
    const [dropDown , setdropDown] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
      if(sessionStorage.getItem("token")){
        const userToken = sessionStorage.getItem("token")
        setToken(userToken)
        const user = JSON.parse(sessionStorage.getItem("user"))
        setDp(user.picture)
      }

    },[token])
    const menuBtnClick =() =>{
        setListStatus(!listStatus)
    }

    const logout = ()=>{
        sessionStorage.clear()
        setToken("")
        setDp("")
        setdropDown(false)
        setListStatus(false)
        navigate('/')
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
            <FaInstagram className='text-xl'/>
            <FaFacebook className='mx-1 text-xl'/>
            <FaXTwitter className='text-xl'/>
            {
                !token ? <Link to={'/login'} className='ms-4 border rounded px-2 py-1 flex items-center hover:bg-black hover:text-white '><FaUser className='mx-1'/> Login</Link>
                :
                <div className='relative inline-block text-left ms-2'>
                    <button onClick={()=>setdropDown(!dropDown)} className='w-full bg-white px-3 py-2 shadow-xs hover:bg-gray-50'>
                      <img width={'40px'} height={'40px'} src={dp ? dp : "https://tse3.mm.bing.net/th/id/OIP.sLPk_28d6WaGWuZwJe0kFQHaHa?w=512&h=512&rs=1&pid=ImgDetMain&o=7&rm=3"} alt="profile pic" />
                    </button>
                {  dropDown &&
                    <div className='absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right ring-1 ring-black/5 focus:outline-hidden '>
                    <Link to={'/user/profile'} className=' px-4 py-2 text-sm text-gray-700 flex items-center gap-2'><FaAddressCard/>Profile</Link>
                    <button onClick={logout} className='px-4 py-2 text-sm text-gray-700 flex items-center gap-2'><FaPowerOff/>Logout</button>
                </div>}
                </div>
            }
            
        </div>
    </div>
    {/* lower part */}
    <nav className='w-full p-3 bg-black text-white md:flex justify-center items-center'>
        <div className="flex justify-between items-center text-2xl md:hidden">
            {/* menu bar */}
            <button onClick={menuBtnClick} className='cursor-pointer'><FaBars/></button>
            {/* login link */}
            {
                !token ? <Link to={'/login'} className='ms-4 border rounded px-2 py-1 flex items-center hover:bg-black hover:text-white '><FaUser className='mx-1'/> Login</Link>
                :
                <div className='relative inline-block text-left ms-2'>
                    <button onClick={()=>setdropDown(!dropDown)} className='w-full bg-white px-3 py-2 shadow-xs hover:bg-gray-50'>
                      <img width={'40px'} height={'40px'} src={dp ? dp : "https://tse3.mm.bing.net/th/id/OIP.sLPk_28d6WaGWuZwJe0kFQHaHa?w=512&h=512&rs=1&pid=ImgDetMain&o=7&rm=3"} alt="profile pic" />
                    </button>
                {  dropDown &&
                    <div className='absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right ring-1 ring-black/5 focus:outline-hidden '>
                    <Link to={'/user/profile'} className=' px-4 py-2 text-sm text-gray-700 flex items-center'><FaAddressCard/>Profile</Link>
                    <button onClick={logout} className='px-4 py-2 text-sm text-gray-700 flex items-center'><FaPowerOff/>Logout</button>
                </div>}
                </div>
            }
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