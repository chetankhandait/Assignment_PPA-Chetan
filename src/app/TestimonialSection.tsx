import React from 'react'

const TestimonialSection = () => {
  return (
    <div className='flex flex-col  items-start  gap-20  bg-[#F5F7FA] py-8 lg:flex-row lg:px-32 '>
     
        <img src="./client_new.png" alt="" width={326} height={326} />
   
      <div>
        <div className='flex flex-col items-start gap-4 px-4 sm: '>
            <p className='text-lg sm:text-base text-subColor'>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
            </p>
            <h3 className='text-xl text-brandColor font-semibold'>
            Tim Smith
            </h3>
            <h4 className='text-base text-subColor '>
            British Dragon Boat Racing Association
            </h4>
            <div className='flex  flex-col items-center gap-10 sm:flex-row '>
                <div className='py-4 gap-3 flex flex-1 items-center sm:gap-10'>

                <img src="./Testinomilal/1.png" alt="" />
                <img src="./Testinomilal/2.png" alt="" />
                <img src="./Testinomilal/3.png" alt="" />
                <img src="./Testinomilal/4.png" alt="" />
                <img src="./Testinomilal/5.png" alt="" />
                <img src="./Testinomilal/6.png" alt="" />
                </div>
                 <div className=''>

                    <p className='text-xl text-brandColor font-semibold'>
                        Meet all Customers 
                    </p>
                 </div>
                 
                </div>    
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection
