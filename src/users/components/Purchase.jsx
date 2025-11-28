import React from 'react'

function Purchase() {
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
                        {/* purchase */}
                        <img width={'200px'} height={'150px'} src="https://static.vecteezy.com/system/resources/previews/023/629/698/original/web-button-icon-purchase-button-free-png.png" alt="purchase" />
                    </div>
                </div>
                <div>
                    <img className='w-50 mt-4 md:mt-0' src="https://tse3.mm.bing.net/th/id/OIP.O_5w60OzA93YxcPlYTOiaAHaLH?w=933&h=1400&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Purchase