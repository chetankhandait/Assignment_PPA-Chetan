import React from 'react'

const MiddleSection = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full gap-8 sm:flex-row'>
      <div>
        <img src="./rafiki.png" alt="" width={441.53} height={328.99} />
      </div>
      <div className='px-5   sm:w-1/2 flex flex-col gap-8 items-start'>
        <p className='text-4xl font-semibold text-brandTextcolor'>
        The unseen of spending three years at Pixelgrade
        </p>
        <p className='text-base text-subColor'>
        Lorem ipsum dolor  amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
        </p>
       <button className='text-base px-8 py-3.5 bg-brandColor text-white  rounded-md'>
        Learn More
       </button>
      </div>
    </div>
  )
}

export default MiddleSection
