import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaCamera, FaEye } from 'react-icons/fa'
import { Link, useParams } from 'react-router'
import { FaBackward, FaX } from 'react-icons/fa6'
import { viewBookAPI } from '../../services/allAPI'
import serverURL from '../../services/serverURL'
import {loadStripe} from '@stripe/stripe-js';

function View() {

  const [modalStatus, setModalStatus] = useState(false)
  const {id} = useParams()
  console.log(id);
  const [book,setBook] = useState({})
  console.log(book);
  

  useEffect(()=>{
    getBookDetails()
  },[])

  const getBookDetails = async() =>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Authorization" : `Bearer ${token}`
      }
      const result = await viewBookAPI(reqHeader,id)
      if(result.status == 200){
        setBook(result.data)
      }
      else{
        console.log(result);  
      }
    }
  }
  
  const makePayment = async ()=>{
    // to view stripe payment window
     const stripe = await loadStripe('pk_test_51SkJDw2IihGp2GQrXb8jZ3IeekKaFo6tI2dGjZ2RgFvJbYKprtYuDePIq1TIPnykCpLTVApMbQ9GON0lQ8H1ae7U00XytiWOqB');
  }



  return (
    <>
    <Header/>
    {/* view page */}
    <div className='md:m-10 m-5'>
      <div className='shadow border p-5 border-gray-500'>
        <div className='md: grid grid-cols-4 gap-x-10'>
          {/* image col */}
            <div className="col-span-1">
              <img className='w-full' src={book?.imageURL} alt="" />
            </div>
            {/* book details col */}
            <div className='col-span-3'>
              <div className='flex justify-between items-center mt-5 md:mt-0'>
                <h1 className='text-2xl font-bold'>{book?.title}</h1>
                <button onClick={()=>setModalStatus(true)} className='text-gray-400'><FaEye/></button>
              </div>
             <h1 className='text-xl text-blue-500 my-2'>- {book?.author}</h1>
             <div className='md:grid grid-cols-3 gap-5 my-10'>
                <p className='font-bold text-xl'>Publisher : {book?.publisher}</p>
                <p className='font-bold text-xl'>Language : {book?.language}</p>
                <p className='font-bold text-xl'>No. of Pages :{book?.pages} </p>
                <p className='font-bold text-xl'>Original Price : {book?.price}</p>
                <p className='font-bold text-xl'>ISBN : {book?.isbn}</p>
                <p className='font-bold text-xl'>Category :{book?.category} </p>
                <p className='font-bold text-xl'>Seller : {book?.sellerMail} </p>
             </div>
             <div className='md:my-10 my-4'>
                <p className='font-bold text-xl'>Abstract : {book?.abstract}</p>
             </div>
              <div className='flex justify-end'>
                <Link to={'/books'} className='bg-blue-700 px-7 py-2 text-white ms-5 rounded'><FaBackward className='me-2 '/>Back</Link>
                <button onClick={makePayment} className='bg-green-700 p-2 rounded text-white ms-5'>Buy $ {book?.discountPrice}</button>
              </div>
            </div>
        </div>

      </div>

    </div>
    {/* modal */}
     {  modalStatus &&
      <div onClick={()=>setModalStatus(false)} className='relative z-10'>
          <div className='bg-gray-500/75 fixed inset-0'>
                <div className='flex justify-center items-center min-h-screen'>
                  <div className='bg-white rounded-2xl md:w-250 w-100'>
                    {/* modal title */}
                    <div className='bg-black text-white p-3 flex justify-between items-center'>
                        <h3>Books Images</h3>
                        <FaX  onClick={()=>setModalStatus(false)}/>
                    </div>
                    {/* modal body */}
                    <div className='relative p-5'>
                      <p className='text-blue-500 flex gap-3 items-center'><FaCamera/>Camera clicks of the book in the hand of seller</p>
                     {/* book images in row */}
                      <div className='md:flex flex-wrap my-5'>
                        {
                          book?.uploadImages?.map(fileName=>(
                               <img className='md:w-75 w-25 md:me-2 mb-3 md:mb-0' src={`${serverURL}/uploads/${fileName}`} alt="book" />
                          ))
                        }
                      
                      </div>
                   </div>
                  </div>

          </div>
          </div>
      </div>
      }

    <Footer/>
    </>
  )

}
export default View