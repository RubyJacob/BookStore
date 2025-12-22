import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { getAllBooksPageAPI } from '../../services/allAPI'
import { all } from 'axios'

function Books() {
  const [showCategory,setShowCategory] = useState(false)
  const [token,setToken] = useState("")
  const [allBooks,setAllBooks] = useState([])
  const [allCategory,setAllCategory] = useState([])
  const [tempAllBooks,setTempAllBooks] = useState([])
  //console.log(allBooks);
  

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
       const userToken = sessionStorage.getItem("token")
       setToken(userToken)
       getAllBooks(userToken)
    }
  },[])
   
  const getAllBooks = async(token)=>{
    const reqHeader ={
      "Authorization" : `Bearer ${token}`
    }
    const result = await getAllBooksPageAPI(reqHeader)
    if(result.status == 200){
      setAllBooks(result.data)
      setTempAllBooks(result.data)
      const tempAllCategory = result.data?.map(item=>item.category)
      const tempCategorySet = new Set(tempAllCategory)
      console.log([...tempCategorySet]);
      setAllCategory([...tempCategorySet])
      
    }
    else{
        console.log(result);        
    }
  }
   
  const filterBooks = (category)=>{
    if(category == "all"){
      setAllBooks(tempAllBooks)
    }
    else{
      setAllBooks(tempAllBooks?.filter(item=> item.category == category))
    }
  }


  return (
    <>
    <Header/>
    { 
      token ?
     <>
     {/*login - book page */}
     <div className='flex flex-col justify-center items-center my-5'>
      {/* title */}
      <h1 className='text-3xl font-bold my-5'>ALL BOOKS</h1>
      {/* search box */}
     <div className='flex my-5'>
        <input type="text" placeholder='Search By Title' className='border p-2 w-100 border-gray-400 placeholder-gray-500' />
        <button className='bg-black text-white mx-2 p-2'>Search</button>
     </div>
     </div>
      {/* book and filter row */}
      <div className='md: grid grid-cols-4 md:px-20 p-5 mb-10'>
        {/* filter */}
        <div className="col-span-1">
          {/* filter title */}
          <div className="flex justify-between">
            <h1 className='text-2xl font-bold'>Filter</h1>
            <button onClick={()=>setShowCategory(!showCategory)} className='text-2xl md:hidden'><FaBars/></button>
          </div>
          {/* filter option */}
          <div className={showCategory?"block":'md:block hidden'}>
            {/* category 1 */}
              <div className="mt-3">
                <input onClick={()=>{filterBooks("all")}} type="radio" name='filter' id='all' />
                <label htmlFor="all" className='ms-3'>All</label>
              </div>
              {/* book category */}
              {
                allCategory?.map((category,index)=>(
                   <div onClick={()=>{filterBooks(category)}} key={index} className="mt-3">
                         <input type="radio" name='filter' id={category}/>
                        <label htmlFor={category} className='ms-3'>{category}</label>
                   </div>
                ))
              }
          </div>
        </div>
        <div className="col-span-3">
          <div className='md:grid grid-cols-4 mt-5 md:mt-0'>
            {/* book duplicate */}
            { 
              allBooks?.length > 0 ?
              allBooks?.map(book=>(
              <div key={book?._id} className="shadow rounded p-3 mx-4">
                 <div className='flex justify-center '><img width={'250px'} height={'250px'} src={book?.imageURL} alt="book"/></div>
                   <div className="flex justify-center items-center flex-col">
               <h3 className='text-blue-600 font-bold text-lg'>{book?.author}</h3>
               <h4 className='text-lg'>{book?.title.slice(0,9)}...</h4>
               <Link to={`/books/${book?._id}/view`} className='px-5 py-2 mt-2 text-white bg-blue-500'>View</Link>
             </div>
            </div>
              ))
            :
            <p className='font-bold'>Loading....</p>
            }

          </div>
        </div>
      </div>


     </>
     :
      <div className='w-screen h-screen flex justify-center items-center flex-col gap-3'>
         {/* not login -book page */}
         <img className='w-80' src="https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-30-710_512.gif" alt="" />
          <p className='text-3xl font-bold'>Please <Link to={'/login'} className='text-blue-700 underline'>Login</Link> to Explore More</p>
      </div>
     }
    
    <Footer/>
    </>
  )
}

export default Books