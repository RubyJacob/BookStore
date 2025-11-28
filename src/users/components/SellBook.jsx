import React from 'react'

function SellBook() {
  return (
    <div>
        <div className='p-10 my-20 mx-5 bg-gray-200'>
            <h1 className='text-center text-3xl font-bold'>Book Details</h1>
            <div className='md:grid grid-cols-2 mt-10 w-full'>
                    <div className='px-3'>
                        <div className='mb-4'>
                            <input type="text" placeholder='Book Title'  className='p-3 bg-white w-full rounded'/>
                        </div>
                        <div className='mb-4'>
                            <input type="text" placeholder='Author'  className='p-3 bg-white w-full rounded'/>
                        </div>
                        <div className='mb-4'>
                            <input type="text" placeholder='No. of pages'  className='p-3 bg-white w-full rounded'/>
                        </div>
                        <div className='mb-4'>
                            <input type="text" placeholder='Original Price'  className='p-3 bg-white w-full rounded'/>
                        </div>
                        <div className='mb-4'>
                            <input type="text" placeholder='Dicscount Price'  className='p-3 bg-white w-full rounded'/>
                        </div>
                        <div className='mb-4'>
                            <input type="text" placeholder='Book Img Url'  className='p-3 bg-white w-full rounded'/>
                        </div>
                        <div className='mb-4'>
                            <textarea type="text" rows={5} placeholder='Book Title'  className='p-3 bg-white w-full rounded'/>
                        </div>
                    </div>
                      <div className='px-3'>
                        <div className='mb-4'>
                            <input type="text" placeholder='Language'  className='p-3 bg-white w-full rounded'/>
                        </div>
                        <div className='mb-4'>
                            <input type="text" placeholder='Publisher'  className='p-3 bg-white w-full rounded'/>
                        </div>
                        <div className='mb-4'>
                            <input type="text" placeholder='ISBN'  className='p-3 bg-white w-full rounded'/>
                        </div>
                        <div className='mb-4'>
                            <input type="text" placeholder='Category'  className='p-3 bg-white w-full rounded'/>
                        </div>
                        <div className="mb-4 flex items-center justify-center mt-10">
                            <label htmlFor="uploadimg">
                                <input type="file" id='uploadimg' hidden />
                                <img width={'200px'} src="https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Image-Transparent-Free-PNG.png" alt="upload" />
                            </label>
                        </div>

                    </div>
            </div>
            <div className='flex justify-end'>
                <button className='bg-gray-600 text-white p-3 rounded me-5 hover:bg-white hover:text-gray-600'>RESET</button>
                <button className='bg-blue-600 text-white p-3 rounded me-5 hover:bg-white hover:text-blue-400'>SUBMIT</button>
            </div>
        </div>
    </div>
  )
}

export default SellBook