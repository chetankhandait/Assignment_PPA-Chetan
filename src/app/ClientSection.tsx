import React from 'react'

const ClientSection = () => {
  return (
    <div  className='w-full my-8  '>
      <div className='flex flex-col items-center  justify-center gap-4 px-2  sm:px-36 '>
        <p className='text-4xl font-bold  '>
            Our Clients
        </p>

        <p className='text-base text-center'>
        We have been working with some Fortune 500+ clients
        </p>
      <div className='flex items-center justify-evenly w-full flex-1 '>
        
 <img src="./client_icon/I-1.png" alt="" />
 <img src="./client_icon/I-2.png" alt="" />
 <img src="./client_icon/I-3.png" alt="" />
 <img src="./client_icon/I-4.png" alt="" />
 <img src="./client_icon/I-5.png" alt="" />
 <img src="./client_icon/I-6.png" alt="" />
 <img src="./client_icon/I-7.png" alt="" />
      </div>
      </div>
    </div>
  )
}

export default ClientSection
