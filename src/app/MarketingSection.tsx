import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const MarketingSection = () => {
  return (
    <div>
      <section className="  text-brandTextcolor ">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="mx-auto max-w-xl text-center">
      <h2 className="text-3xl font-bold text-brandTextcolor sm:text-4xl">Caring is the new marketing</h2>

      <p className="mt-4 text-subColor">
      The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​
      </p>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
       
      <div
        className="  rounded-xl flex flex-col      transition hover:border-pink-500/10  "
       
      >
         
        <img src="./Strategy/1.png" alt=""  />
        <div className=' flex flex-col     gap-4  text-subColor p-4   mt-2  rounded-md shadow-md bg-alternateColor items-center  sm:-translate-y-36 sm:mx-6'>


        <p className="mt-1 text-xl text-center ">
        Creating Streamlined Safeguarding Processes with OneRen
        </p>
        <p className="flex items-center mt-1 text-xl text-center cursor-pointer text-brandColor gap-1 ">
        Read More 
        <FaLongArrowAltRight/>
           
        </p>
        </div>
      </div>

      <div
        className="  rounded-xl flex flex-col      transition hover:border-pink-500/10  "
       
      >
         
        <img src="./Strategy/2.png" alt=""  />
        <div className='flex flex-col     gap-4  text-subColor p-4  mt-2   rounded-md shadow-md bg-alternateColor items-center  sm:-translate-y-36 sm:mx-6 '>


        <p className="mt-1 text-xl text-center ">
        What are your safeguarding responsibilities and how can you manage them?
        </p>
        <p className="flex items-center mt-1 text-xl text-center cursor-pointer text-brandColor gap-1 ">
        Read More 
        <FaLongArrowAltRight/>
           
        </p>
        </div>
      </div>

      <div
        className="  rounded-xl flex flex-col      transition hover:border-pink-500/10  "
       
      >
         
        <img src="./Strategy/3.png" alt=""  />
        <div className='flex flex-col     gap-4  text-subColor p-4  mt-2   rounded-md shadow-md bg-alternateColor items-center  sm:-translate-y-36 sm:mx-6   '>


        <p className="mt-1 text-xl text-center ">
        Creating Streamlined Safeguarding Processes with OneRen
        </p>
        <p className="flex items-center mt-1 text-xl text-center cursor-pointer text-brandColor gap-1 ">
        Read More 
        <FaLongArrowAltRight/>
           
        </p>
        </div>
      </div>

      
    </div>

     
  </div>
</section>
    </div>
  )
}

export default MarketingSection
