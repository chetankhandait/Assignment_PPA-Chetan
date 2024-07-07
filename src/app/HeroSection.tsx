import React from 'react'
import Navbar from './Navbar'

const HeroSection = () => {
  return (
    <>
    <div className='bg-[#F5F7FA]'>

    <Navbar/>
     <div className=' px-6 py-3 lg:px-32 sm:py-24 '>
        <div className='flex flex-col  items-center justify-center gap-28  sm:flex-row '>
            <div className='flex flex-col items-start gap-8 sm:w-[657px]  '>
                <p className='text-6xl leading-snug font-semibold  '>
                Lessons and insights <span className='text-[#4CAF4F]'>from 8 years 
                    </span> 
                </p>
                <p className='text-base'>
                Where to grow your business as a photographer: site or social media?
                </p>

                <button className='text-base w-32 h-12 bg-[#4CAF4F] text-white rounded-md'>
                    Register
                </button>
            </div>
            <div>
                <img src="./illustration.png" alt="" width={391} height={407} />
            </div>
        </div>
     </div>
    </div>
    </>
  )
}

export default HeroSection
