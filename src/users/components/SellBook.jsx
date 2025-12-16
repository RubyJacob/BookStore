import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { addbookAPI } from '../../services/allAPI';

function SellBook() {
    const [bookDetails,setBookDetails]= useState(
        {
            title:"",author:"",pages:"",price:"",discountPrice:"",imageURL:"",abstract:"",language:"",publisher:"",isbn:"",category:"",uploadImages:[]
        })
    const [preview,setPreview] = useState("")
    const [previewList,setPreviewList] = useState([])   
    console.log(bookDetails);

    const handleUploadBookImage = (e)=>{
        //get file which upload
        console.log(e.target.files[0]);
        //add to file to state
        const imgFileArray = bookDetails.uploadImages
        imgFileArray.push(e.target.files[0])
        setBookDetails({...bookDetails,uploadImages:imgFileArray})
        //covert file to url
        const url = URL.createObjectURL(e.target.files[0])
        console.log(url);
        setPreview(url)
        const bookImagesArray = previewList
        bookImagesArray.push(url)
        setPreviewList(bookImagesArray)
    }
    const resetUploadBookForm = ()=>{
        setBookDetails({
            title:"",author:"",pages:"",price:"",discountPrice:"",imageURL:"",abstract:"",language:"",publisher:"",isbn:"",category:"",uploadImages:[]
        })
        setPreview("")
        setPreviewList([])
    }
    const handleBookUpload = async(e)=>{
        const {title, author, pages, price, discountPrice, imageURL, abstract, language, publisher, isbn, category, uploadImages } = bookDetails
        if(!title || !author || !pages || !price || !discountPrice || !imageURL || !abstract || !language || !publisher || !isbn || !category || uploadImages.length == 0){
            toast.info("Please fill the form completely !!!")
        }
        else{
            //api call
            const token = sessionStorage.getItem("token")
            if(token){
                const reqHeader ={
                    "Authorization" : `Bearer ${token}`
                }
                const reqBody = new FormData()
                for(let key in bookDetails){
                    if(key != "uploadImages"){
                        reqBody.append(key,bookDetails[key])
                    }
                    else{
                        bookDetails.uploadImages.forEach(imgFile=>{
                            reqBody.append("uploadImages",imgFile)
                        })
                    }
                }

                const result = await addbookAPI(reqBody,reqHeader)
                console.log(result);
                if(result.status == 200){
                    toast.success("Book Added Succesfully")
                }
                else if(result.status == 401){
                    toast.warning(result.response.data)
                }
                else{
                    toast.error("Something Went Wrong")
                }
                resetUploadBookForm()
            }
        }
    } 
    



  return (
    <div>
        <div className='p-10 my-20 mx-5 bg-gray-200'>
            <h1 className='text-center text-3xl font-bold'>Book Details</h1>
            <div className='md:grid grid-cols-2 mt-10 w-full'>
                    <div className='px-3'>
                        <div className='mb-4'>
                            <input value={bookDetails.title} onChange={e=>setBookDetails({...bookDetails,title:e.target.value})} type="text" placeholder='Book Title'  className='p-3 bg-white w-full rounded'/>
                        </div>
                        <div className='mb-4'>
                            <input value={bookDetails.author} onChange={e=>setBookDetails({...bookDetails,author:e.target.value})} type="text" placeholder='Author'  className='p-3 bg-white w-full rounded'/>
                        </div>
                        <div className='mb-4'>
                            <input value={bookDetails.pages} onChange={e=>setBookDetails({...bookDetails,pages:e.target.value})} type="text" placeholder='No. of pages'  className='p-3 bg-white w-full rounded'/>
                        </div>
                        <div className='mb-4'>
                            <input value={bookDetails.price} onChange={e=>setBookDetails({...bookDetails,price:e.target.value})} type="text" placeholder='Original Price'  className='p-3 bg-white w-full rounded'/>
                        </div>
                        <div className='mb-4'>
                            <input value={bookDetails.discountPrice} onChange={e=>setBookDetails({...bookDetails,discountPrice:e.target.value})} type="text" placeholder='Discount Price'  className='p-3 bg-white w-full rounded'/>
                        </div>
                        <div className='mb-4'>
                            <input value={bookDetails.imageURL} onChange={e=>setBookDetails({...bookDetails,imageURL:e.target.value})} type="text" placeholder='Book Img Url'  className='p-3 bg-white w-full rounded'/>
                        </div>
                        <div className='mb-4'>
                            <textarea value={bookDetails.abstract} onChange={e=>setBookDetails({...bookDetails,abstract:e.target.value})} type="text" rows={5} placeholder='Abstract'  className='p-3 bg-white w-full rounded'/>
                        </div>
                    </div>
                      <div className='px-3'>
                        <div className='mb-4'>
                            <input value={bookDetails.language} onChange={e=>setBookDetails({...bookDetails,language:e.target.value})} type="text" placeholder='Language'  className='p-3 bg-white w-full rounded'/>
                        </div>
                        <div className='mb-4'>
                            <input value={bookDetails.publisher} onChange={e=>setBookDetails({...bookDetails,publisher:e.target.value})} type="text" placeholder='Publisher'  className='p-3 bg-white w-full rounded'/>
                        </div>
                        <div className='mb-4'>
                            <input value={bookDetails.isbn} onChange={e=>setBookDetails({...bookDetails,isbn:e.target.value})} type="text" placeholder='ISBN'  className='p-3 bg-white w-full rounded'/>
                        </div>
                        <div className='mb-4'>
                            <input value={bookDetails.category} onChange={e=>setBookDetails({...bookDetails,category:e.target.value})} type="text" placeholder='Category'  className='p-3 bg-white w-full rounded'/>
                        </div>
                        <div className="mb-4 flex items-center justify-center mt-10">
                            <label htmlFor="uploadimg">
                                <input onChange={e=>handleUploadBookImage(e)} type="file" id='uploadimg' hidden />
                                <img width={'300px'} height={'300px'} src={ preview? preview :"https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Image-Transparent-Free-PNG.png"} alt="upload" />
                            </label>
                        </div>
                         {/* for more image upload */}
                           {
                            preview &&
                            <div className='flex justify-center items-center'>
                                {/* upload images */}
                               { previewList?.map((bookImgURL,index)=>(
                                    <img key={index} width={'70px'} height={'70px'} src={bookImgURL} className='ms-3' alt="upload Book" />
                                ))
                                }

                                {/* add more file upload */}
                               { 
                               previewList.length<3 && 
                                <label htmlFor='bookImages' className='flex'>
                                    <input  onChange={e=>handleUploadBookImage(e)} type="file" id='bookImages' hidden/>
                                    <FaPlus className='text-3xl ms-3'/>
                                </label>
                                }
                            </div>
                            }

                    </div>
            </div>
            <div className='flex justify-end'>
                <button onClick={resetUploadBookForm} className='bg-gray-600 text-white p-3 rounded me-5 hover:bg-white hover:text-gray-600'>RESET</button>
                <button onClick={handleBookUpload} className='bg-blue-600 text-white p-3 rounded me-5 hover:bg-white hover:text-blue-400'>ADD BOOK</button>
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

export default SellBook