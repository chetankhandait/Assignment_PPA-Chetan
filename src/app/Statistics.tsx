import React from 'react'

const Statistics = () => {
  return (
    <div className='py-10 w-full text-subColor '>
      <div className='flex flex-col items-center mx-auto lg:flex-row lg:justify-evenly  '>
        <div className='flex flex-col items-center text-center lg:items-start lg:text-left '>
            <p className='text-4xl font-bold'>
            Helping a local <br/> <span className='text-brandColor '>
            business reinvent itself
                </span>
            </p>
            <p>
            We reached here with our hard work and dedication
            </p>
        </div>
        <div  className="    grid grid-cols-2  gap-16 p-4 ">
    <div  className=" flex items-center gap-3   ">
        <div>
            <img src="./Statistics/1.png" alt="" width={46.78} height={31.12} />
        </div>
        <div className='flex items-start flex-col'>
           <h3 className='font-bold'>
           2,245,341
           </h3>
           <h5>
            Member
           </h5>
        </div>
    </div>
    <div  className=" flex items-center gap-3   ">
        <div>
            <img src="./Statistics/2.png" alt="" width={46.78} height={31.12} />
        </div>
        <div className='flex items-start flex-col'>
           <h3 className='font-bold '>
           2,245,341
           </h3>
           <h5>
            Member
           </h5>
        </div>
    </div>
    <div  className=" flex items-center gap-3   ">
        <div>
            <img src="./Statistics/3.png" alt="" width={46.78} height={31.12} />
        </div>
        <div className='flex items-start flex-col'>
           <h3 className='font-bold'>
           2,245,341
           </h3>
           <h5>
            Member
           </h5>
        </div>
    </div>
    <div  className=" flex items-center gap-3   ">
        <div>
            <img src="./Statistics/4.png" alt="" width={46.78} height={31.12} />
        </div>
        <div className='flex items-start flex-col'>
           <h3 className='font-bold'>
           2,245,341
           </h3>
           <h5>
            Member 
           </h5>
        </div>
    </div>
    
  </div>
      </div>
    </div>
  )
}

export default Statistics
