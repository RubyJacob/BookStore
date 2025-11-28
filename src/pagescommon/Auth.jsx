import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link } from 'react-router'

function Auth({insideRegister}) {
  const [viewPassword, setPassword] = useState(false)
  return (
    <div className='w-full min-h-screen flex justify-center items-center flex-col bg-[url(/auth-img.png)] bg-cover bg-center'>
      <div className="p-10">
        <h1 className='text-3xl font-bold text-white text-center'>BOOK STORE</h1>
        <div style={{width:'450px'}} className='bg-black text-white p-5 flex flex-col justify-center items-center my-5 '>
          <div style={{width:'100px',height:'100px',borderRadius:'50%'}} className='border my-5 flex justify-center items-center'>
            <FaUser className='text-3xl'/>
          </div>
          {/* login/register */}
          <h2 className='text-2xl'>{insideRegister?"REGISTER":"LOGIN"}</h2>
          <form className='my-5 w-full'>
            {/* username for register */}
            {
              insideRegister && 
                <input type="text" placeholder='Username' className='bg-white text-black placeholder-gray-500 w-full p-2 rounded mb-5' />
            }
            <input type="text" placeholder='Email Id' className='bg-white text-black placeholder-gray-500 w-full p-2 rounded mb-5' />
            <div className='flex items-center'> <input type={viewPassword?"text":"password" }placeholder='Password' className='bg-white text-black placeholder-gray-500 w-full p-2 rounded' />
           {/* password view */}
            { viewPassword ?
              <FaEyeSlash onClick={()=>setPassword(!viewPassword)} className='text-gray-500 cursor-pointer' style={{marginLeft:'-30px',marginTop:'-10px'}}/> :
            <FaEye onClick={()=>setPassword(!viewPassword)} className='text-gray-500 cursor-pointer' style={{marginLeft:'-30px',marginTop:'-10px'}}/>}
            </div>
            {/* forgot password */}
          {  
            !insideRegister &&
            <div className="flex justify-between mb-5 items-center">
              <p className='text-yellow-200 my-2'>*Never Share your password with others</p>
              <button className='text-xs underline'>Forgot Password</button>
            </div>
            }

            {/* login/register btn */}
             <div className='text-center'>
              {  insideRegister ?
                <button type='button' className='bg-green-700 w-full rounded p-2 mt-3'>Register</button>:
                  <button type='button' className='bg-green-700 w-full rounded p-2  '>Login</button>
                }
             </div>

             {/* google authentication */}
             <div className='my-5 text-center'>
                  {
                    insideRegister ? <p className='text-blue-600'>Already a User ? <Link  to={'/login'} className='underline ms-5'>Login</Link> </p>:
                    <p className='text-blue-600'>Are you a New User ? <Link  to={'/register'} className='underline ms-5'>Register</Link> </p>
                  }
             </div>
          </form>
        </div>
      </div>


    </div>
  )
}

export default Auth