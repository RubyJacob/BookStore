import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';
import { googleLoginAPI, loginAPI, registerAPI } from '../services/allAPI';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function Auth({insideRegister}) {
  const navigate = useNavigate()
  const [viewPassword, setPassword] = useState(false)
  //store data from home
  const [userDetails, setUserDetails] = useState({
    username:"", email: "", password:""
  })
 //console.log(userDetails);
  
 const handleRegister = async (e)=>{
   e.preventDefault()
   const{username,email,password}= userDetails
   if(email && password && username){
    //toast.success("API Call")
    try{
      const result = await registerAPI(userDetails)
      console.log(result);
      if(result.status == 200){
        toast.success("Register Successfull....Please Login to BookStore")
        setUserDetails({ username:"", email: "", password:""})
        navigate('/login')
      }
      else if(result.status == 409){
        toast.warning(result.response.data)
        setUserDetails({ username:"", email: "", password:""})
        navigate('/login')
      }
      else{
         console.log(result);
         toast.error("Something went wrong")
        setUserDetails({ username:"", email: "", password:""})
      }
      

    }
    catch(err){
      console.log(err);  
    }
   }
   else{
    toast.info("Please fill the form completely")
   }
 }

 const handleLogin = async (e) =>{
  e.preventDefault()
  const {email,password}= userDetails
  if(email && password){
    try{
        const result = await loginAPI(userDetails)
        console.log(result);
        if(result.status == 200){
          toast.success("Login Successful !!")
          sessionStorage.setItem("token",result.data.token)
          sessionStorage.setItem("user",JSON.stringify(result.data.user))
          setTimeout(()=>{
            if(result.data.user.role == "admin"){
              navigate('/admin/home')
            }
            else{
              navigate('/')
            }
          },2500)
        }
        else if(result.status == 401 || result.status == 404){
          toast.warning(result.response.data)
          setUserDetails({ username:"", email: "", password:""})
        }
        else{
          toast.error("Something Went Wrong !!")
           setUserDetails({ username:"", email: "", password:""})
        }
        
    }
    catch(err){
      console.log(err);
    }
  }
  else{
    toast.info("Please fill the form completely !!!")
  }
 }
 const handleGoogleLogin = async(credentialResponse)=>{
   console.log("Inside handleGoogleLogin");
   console.log(credentialResponse); 
   const decode = jwtDecode(credentialResponse.credential)
   //console.log(decode);
   const result = await googleLoginAPI({username:decode.name,email:decode.email,password:'googlePassword',picture:decode.picture})
   if(result.status == 200){
          toast.success("Login Successful !!")
          sessionStorage.setItem("token",result.data.token)
          sessionStorage.setItem("user",JSON.stringify(result.data.user))
          setTimeout(()=>{
            if(result.data.user.role == "admin"){
              navigate('/admin/home')
            }
            else{
              navigate('/')
            }
          },2500)
        }
        else{
          console.log(result);
          toast.error("Sonmething went Wrong !!")     
        }
 }




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
                <input value={userDetails.username} onChange={(e)=> setUserDetails({...userDetails,username:e.target.value})} type="text" placeholder='Username' className='bg-white text-black placeholder-gray-500 w-full p-2 rounded mb-5' />
            }
            {/* email */}
            <input value={userDetails.email} onChange={(e)=> setUserDetails({...userDetails,email:e.target.value})} type="text" placeholder='Email Id' className='bg-white text-black placeholder-gray-500 w-full p-2 rounded mb-5' />
            <div className='flex items-center'> <input value={userDetails.password} onChange={(e)=> setUserDetails({...userDetails,password:e.target.value})} type={viewPassword?"text":"password" }placeholder='Password' className='bg-white text-black placeholder-gray-500 w-full p-2 rounded' />
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
                <button onClick={handleRegister} type='button' className='bg-green-700 w-full rounded p-2 mt-3'>Register</button>:
                  <button onClick={handleLogin} type='button' className='bg-green-700 w-full rounded p-2  '>Login</button>
                }
             </div>

             {/* google authentication */}
              <div className="text-center my-5">
                {
                  !insideRegister && 
                  <p>---------------------------------------------or------------------------------------------</p>}
                  {
                    !insideRegister &&
                    <div  className='my-5 flex justify-center items-center w-full' >
                      <GoogleLogin
                  onSuccess={credentialResponse => {
                  handleGoogleLogin(credentialResponse)
                 }}
                 onError={() => {
                     console.log('Login Failed');
                    }} />
                     </div>
                    }
                   
                
              </div>



             <div className='my-5 text-center'>
                  {
                    insideRegister ? <p className='text-blue-600'>Already a User ? <Link  to={'/login'} className='underline ms-5'>Login</Link> </p>:
                    <p className='text-blue-600'>Are you a New User ? <Link  to={'/register'} className='underline ms-5'>Register</Link> </p>
                  }
             </div>
          </form>
        </div>
      </div>
      {/* toast */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="colored"
      />

    </div>
  )
}

export default Auth