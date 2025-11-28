import React from 'react'

function BookStatus() {
  return (
    <div className='p-10 my-20 mx-5 shadow rounded'>
        {/* book div */}
        <div className='bg-gray-200 p-5 rounded'>
            <div className='md:grid grid-cols-[3fr_1fr]'>
                <div>
                    <h1 className='text-2xl'>Title</h1>
                    <h1 className="text-xl">Author</h1>
                    <h4 className='text-lg text-red-400'>$ 400</h4>
                    <p className='text-justify'>Abstract</p>
                    <div className='flex mt-5 gap-3'>
                        {/* pending */}
                        <img width={'150px'} height={'150px'} src="https://psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="pending" />
                        {/* sold */}
                         <img width={'120px'} height={'120px'} src="https://www.onlygfx.com/wp-content/uploads/2017/12/sold-stamp-3.png" alt="sold" />
                         {/* approved */}
                         <img width={'120px'} height={'120px'} src="https://pngimg.com/uploads/approved/approved_PNG13.png" alt="approved" />

                    </div>
                </div>
                <div>
                    <img className='w-50 mt-4 md:mt-0' src="https://tse3.mm.bing.net/th/id/OIP.O_5w60OzA93YxcPlYTOiaAHaLH?w=933&h=1400&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                    <button className='p-2 bg-red-600 mt-5'>DELETE</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default BookStatus