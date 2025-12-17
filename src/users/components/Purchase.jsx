import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { getAllUserPurchaseBooksAPI } from '../../services/allAPI';

function Purchase() {
    const [userPurchases,setUserPurchase] = useState([])
        console.log(userPurchases);
        
        useEffect(()=>{
            getUserPurchaseBooks()
        },[])
    
         const getUserPurchaseBooks = async()=>{
            const token = sessionStorage.getItem("token")
            if(token){
            const reqHeader ={
              "Authorization" : `Bearer ${token}`
            }
            const result = await getAllUserPurchaseBooksAPI(reqHeader)
            if(result.status == 200){
              setUserPurchase(result.data)
            }
            else{
                console.log(result);        
            }
           }
          }
    
  return (
   <div className='p-10 my-20 mx-5 shadow rounded'>
        {/* book div */}
       { userPurchases.length > 0?
        userPurchases.map(book=>(
          <div key={book?._id} className='bg-gray-200 p-5 rounded'>
            <div className='md:grid grid-cols-[3fr_1fr]'>
                <div>
                    <h1 className='text-2xl'>{book?.title}</h1>
                    <h1 className="text-xl">{book?.author}</h1>
                    <h4 className='text-lg text-red-400'>$ {book?.price}</h4>
                    <p className='text-justify'>{book?.abstract}</p>
                    <div className='flex mt-5 gap-3'>
                        {/* purchase */}
                        <img width={'200px'} height={'150px'} src="https://static.vecteezy.com/system/resources/previews/023/629/698/original/web-button-icon-purchase-button-free-png.png" alt="purchase" />
                    </div>
                </div>
                <div>
                    <img className='w-50 mt-4 md:mt-0' src={book?.imageURL} alt="" />
                </div>
            </div>
        </div>
        ))
        :
          <div className='text-center my-5 font-bold'>
                NO BOOKS PURCHASED YET ....
           </div>
        }
    </div>
  )
}

export default Purchase