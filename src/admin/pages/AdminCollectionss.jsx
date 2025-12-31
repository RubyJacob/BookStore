import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSideBar'
import Footer from '../../components/Footer'
import { getAllAdminBookAPI, getAllUsersAPI, updateBookStatusAPI } from '../../services/allAPI'

function AdminCollectionss() {
  const [tab,setTab] = useState(1)
  const [allBooks,setAllBooks] = useState([])
  const [allUsers,setAllUsers] = useState([])
  console.log(allBooks);
  console.log(allUsers);
  

  useEffect(()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      if(tab == 1){
        getAllBooks(token)
      }
      else if(tab == 2){
        getAllUsers(token)
      }
    }
  },[tab])

 const getAllBooks = async (token)=>{
        const reqHeader ={
          "Authorization" : `Bearer ${token}`
        }
        const result = await getAllAdminBookAPI(reqHeader)
        if(result.status == 200){
          setAllBooks(result.data)
        }
        else{
          console.log(result);          
        }
        }
 
  const getAllUsers = async (token)=>{
        const reqHeader ={
          "Authorization" : `Bearer ${token}`
        }
        const result = await getAllUsersAPI(reqHeader)
        if(result.status == 200){
          setAllUsers(result.data)
        }
        else{
          console.log(result);          
        }
        }
  const updateBookStatus = async(id)=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader ={
          "Authorization" : `Bearer ${token}`
        }
     const result = await updateBookStatusAPI(id,reqHeader)
     if(result.status == 200){
      toast.success("Book Status Updated")
      getAllBooks(token)
     }
     else{
      console.log(result);
      
     }
    }
  }

  
  return (
   <>
    <AdminHeader/>
    <div className='md:grid grid-cols-5'>
      <div className='col-span-1'>
         <AdminSideBar/>
      </div>
      <div className='col-span-4 p-10'>
       <h1 className='my-5 text-center text-3xl font-bold'> All Collections</h1>
       {/* tabs */}
       <div className='flex my-5 justify-center items-center'>
        <p onClick={()=>setTab(1)} className={ tab ==1 ?'text-blue-600 font-bold border-r border-l border-t p-2 cursor-pointer text-xl':'border-b font-bold border-gray-200 text-xl p-3'}>Books</p>
        <p onClick={()=>setTab(2)} className={ tab ==2 ?'text-blue-600 font-bold border-r border-l border-t p-2 cursor-pointer text-xl':'border-b font-bold border-gray-200 text-xl p-3'}>Users</p>
       </div>
       {/* tab content */}
       {
         tab==1 && 
         <div className='md:grid grid-cols-4 w-full my-5'>
          {/* duplicate book card */}
         { allBooks?.map((book,index)=>(
            <div key={index} className="shadow rounded p-3 mx-4">
                 <div className='flex justify-center '><img width={'250px'} height={'250px'} src={book?.imageURL} alt="book"/></div>
             <div className="flex justify-center items-center flex-col">
               <h3 className='text-blue-600 font-bold text-lg'>{book?.author}</h3>
               <h4 className='text-lg'>{book?.title}</h4>
               <h4>$ {book?.discountPrice} </h4>
               {
                book?.status != "approved"?
               <button onClick={()=>updateBookStatus(book?._id)} className='bg-green-700 p-2 mt-2 text-white border w-full'>APPROVE</button>
                :
                <img width={'40px'} height={'40px'} src="https://th.bing.com/th/id/R.461699572f0ff19c092962b53e6c35f1?rik=LW79vlsXAP%2fRdw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fgreen-check-mark-icon-transparent-background%2fgreen-check-mark-icon-transparent-background-10.png&ehk=aj%2fsaPT1PXmT0d7O%2fVYIajBHRPzatEBn6kVNP%2fCMHZM%3d&risl=&pid=ImgRaw&r=0" alt="check" />
              }
               </div>
            </div>  
          ))
          }
         </div>
       }
        {/* tab content */}
       {
         tab==2 && 
         <div className='md:grid grid-cols-3 w-full my-5'>
              {/* duplicate user card */}
             { 
             allUsers?.length > 0 ?
             allUsers?.map((user,index)=>(
                <div key={index} className='rounded bg-gray-200 p-1 text-wrap m-3'>
                <p className='text-red-600 font-bold'>ID : {user?._id} </p>
                <div className='flex items-center'>
                  {/* userimage */}
                  <img width={'100px'} height={'100px'} style={{borderRadius:'50%'}} src= {user?.picture ? user?.picture : "https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg"}  alt="profile" />
                  {/* content */}
                  <div className='ms-5'>
                    <h4 className='font-bold text-2xl text-blue-800'>{user?.username}</h4>
                    <p>{user?.email}</p>
                  </div>
                </div>
              </div>
             ))
             :
             <div>
              <p>No users yet ...</p>
             </div>
              }
         </div>
       }
      </div>
    </div>
    <Footer/>
     {/* toast */}
          <ToastContainer
            position="top-center"
            autoClose={2000}
            theme="colored"
          />
    </>
  )
}

export default AdminCollectionss