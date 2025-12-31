import React from 'react'
import { useState } from 'react'
import { deleteBookAPI, getAllUserBooksAPI } from '../../services/allAPI'
import { useEffect } from 'react'

function BookStatus() {
    const [userBooks,setUserBooks] = useState([])
    console.log(userBooks);
    

    useEffect(()=>{
        getUserUploadBooks()
    },[])

     const getUserUploadBooks = async()=>{
        const token = sessionStorage.getItem("token")
        if(token){
        const reqHeader ={
          "Authorization" : `Bearer ${token}`
        }
        const result = await getAllUserBooksAPI(reqHeader)
        if(result.status == 200){
          setUserBooks(result.data)
        }
        else{
            console.log(result);        
        }
       }
      }

       const deleteBook = async(id)=>{
        const token = sessionStorage.getItem("token")
        if(token){
        const reqHeader ={
          "Authorization" : `Bearer ${token}`
        }
        const result = await deleteBookAPI(id,reqHeader)
        if(result.status == 200){
           getUserUploadBooks()
        }
        else{
            console.log(result);        
        }
       }
      }
  return (
    <div className='p-10 my-20 mx-5 shadow rounded'>
        {/* book div */}
        {
            userBooks?.length > 0 ?
            userBooks?.map(book=>(
                 <div key={book?._id} className='bg-gray-200 p-5 rounded my-5'>
            <div className='md:grid grid-cols-[3fr_1fr]'>
                <div>
                    <h1 className='text-2xl'>{book?.title}</h1>
                    <h1 className="text-xl">{book?.author}</h1>
                    <h4 className='text-lg text-red-400'>$ {book?.price}</h4>
                    <p className='text-justify'>{book?.abstract}</p>
                    <div className='flex mt-5 gap-3'>
                     {
                        book?.status == "pending" ?
                        <img width={'150px'} height={'150px'} src="https://psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="pending" />
                        : book?.status == "approved" ?  
                         <img width={'120px'} height={'120px'} src="https://pngimg.com/uploads/approved/approved_PNG13.png" alt="approved" />
                         :
                         <img width={'120px'} height={'120px'} src="https://www.onlygfx.com/wp-content/uploads/2017/12/sold-stamp-3.png" alt="sold" />
                        }                       

                    </div>
                </div>
                <div>
                    <img className='w-50 mt-4 md:mt-0' src={book?.imageURL} alt="" />
                    <button onClick={()=>deleteBook(book?._id)} className='p-2 bg-red-600 mt-5'>DELETE</button>
                </div>
            </div>
           </div>
            ))
           
           :
           <div className='text-center my-5 font-bold'>
                NO BOOKS ADDED YET ....
           </div>

        }
    </div>
  )
}

export default BookStatus