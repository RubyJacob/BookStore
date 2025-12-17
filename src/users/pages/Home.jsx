import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { getHomePageBookAPI } from '../../services/allAPI'
import { useEffect } from 'react'

function Home() {
  const navigate = useNavigate()
  const [searchKey,setSearchKey] = useState("")
  const [homeBooks,setHomeBooks] = useState([])
  console.log(homeBooks);
  

   useEffect(()=>{
    getHomeBooks()
   },[])


  const getHomeBooks = async()=>{
     const result = await getHomePageBookAPI()
     //console.log(result);
     if(result.status == 200){
      setHomeBooks(result.data)
     }
     else{
      console.log(result);    
     }
     
  }

  const handleSearch = () =>{
    if(!searchKey){
      toast.warning("Please provide a Book Title heree !!")
    }
    else if(!sessionStorage.getItem("token")){
    toast.warning("Please Login to search Book !!")
     setTimeout(()=>{
      navigate('/login')
     },2500)
    }
    else if(sessionStorage.getItem("token") && searchKey){
      navigate('/books')
    }
    else{
      toast.error("Something went wrong")
    }
  }
  


  return (
    <>
    <Header/>
     <div>
      {/* landing part */}
      <div style={{height:'500px'}} className='flex justify-center items-center flex-col bg-[url(/background-image.png)] bg-cover bg-center text-white'>
          <div style={{height:'500px',backgroundColor:'rgba(0,0,0,0.3)'}} className='flex justify-center items-center flex-col w-full text-white'>
            <h1 className='text-5xl font-bold mb-2'>Wonderful Gifts</h1>
            <p className='text-xl'>Gift your family and friends a book</p>
            {/* search */}
            <div className='mt-8 flex items-center'>
            <input onChange={e=>setSearchKey(e.target.value)} type="text" placeholder='Search Books here' className='bg-white rounded-3xl text-black w-100 placeholder-gray-500 p-2'/>
            <FaSearch onClick={handleSearch} className='text-gray-500' style={{marginLeft:'-40px'}}/>
             </div>
          </div>
      </div>
      {/* new arrival */}
      <section  className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
        <h1 className="text-5xl font-bold">New Arrivals</h1>
        <h2 className="text-3xl my-3">Explore Our Latest Collections</h2>
         {/* books row and col */}

        <div className='md:grid grid-cols-4 w-full mt-10'>
        {/* duplicate card */}
          {  
            homeBooks?.length>0 ?
              homeBooks.map(book =>(
                  <div key={book?._id} className="shadow rounded p-3 mx-4">
                 <div className='flex justify-center '><img width={'250px'} height={'250px'} src={book?.imageURL} alt="book"/></div>
                  <div className="flex justify-center items-center flex-col">
                          <h3 className='text-blue-600 font-bold text-lg'>{book?.author}</h3>
                        <h4 className='text-lg'>{book?.title}</h4>
                       <h4 className='text-red-400'> $ {book?.price}</h4>
                   </div>
                 </div>
              ))
              :
              <p className='font-bold'>Loading....</p>
            }
        </div>
          <div className="text-center mt-10">
            <Link to={'/books'}  className="p-3 bg-blue-600 text-white">
              Explore More ...
            </Link>
          </div>

      </section>
      {/* author */}
      <section className='md:px-40 p-5 my-5 md:grid grid-cols-2 items-center gap-10'>
        <div className="text-center">
           <h1 className="text-3xl font-bold">FEATURED AUTHORS</h1>
            <h2 className="text-2xl my-3">Captivates With Every Word</h2>
           <p className='text-justify mt-9 text-2xl'> She is a passionate storyteller who has always believed in the power of words to inspire, comfort, and transform. With a deep love for literature,he began writing at a young age, exploring themes of emotion, human connection, and everyday magic. Over the years, this passion grew into a dedicated journey of crafting stories that resonate with readers of all ages.</p>

          <p className='text-justify mt-9 text-2xl'> Drawing inspiration from real-life experiences, travels, and conversations, she creates characters that feel real and narratives that leave a lasting impact. Each book is written with care, blending imagination with heart to create an immersive reading experience.When not lost in a world of writing, she enjoys exploring new cultures, spending time in nature, and discovering unique stories around every corner. Every book is a piece of this journey—and an invitation for readers to join in.</p>
        </div>
         <div className="p-5 flex justify-center items-center">
          <img src="https://media.istockphoto.com/id/1478316046/photo/portrait-of-high-school-teacher-at-school-library.webp?b=1&s=170667a&w=0&k=20&c=FfjVOjG1dRPvsu8yWDMhiMTyJQhjrGbQe0qvHjzvn5Y=" alt="" />
         </div>
      </section>
      {/* testomy */}
      <section  className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
        <h1 className="text-4xl font-bold">TESTIMONIALS</h1>
        <h2 className="text-3xl my-3">See What Others Are Saying</h2>
        <div className="my-5 flex justify-center items-center flex-col">
          <img width={'150px'} height={'150px'} style={{borderRadius:'50%'}} src="https://tse2.mm.bing.net/th/id/OIP.IUoSLt3fn22RIymLIRhfPAHaJh?w=498&h=640&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
            <h1 className='mt-5 text-xl'>Anna Ben</h1>
            <p className='text-justify mt-4 text-2xl'>
              <span className='font-bold me-2 text-2xl'>Amazing Collection and Easy Navigation</span>
              The bookstore website offers a clean, welcoming, and user-friendly experience designed to make browsing and discovering books effortless. Its layout is well-structured, with neatly organized categories that help users quickly find fiction, non-fiction, academic titles, and bestsellers. The homepage highlights featured books and new arrivals, creating a visually appealing first impression while guiding users toward popular choices. Clear fonts, consistent spacing, and a balanced color palette contribute to a pleasant reading and navigation experience.
            </p>
        </div>
      </section>
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

export default Home