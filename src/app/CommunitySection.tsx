import React from 'react'

const CommunitySection = () => {
  return (
    <div className='flex flex-col text-center my-12 gap-4  '>
      <div>
        <p className='text-4xl  font-bold  text-center mx-auto sm:w-1/2 '>
        Manage your entire community in a single system
        </p>
      </div>
      <div>
        <p>Who is Nextcent suitable for?
        </p>
      </div>
      <div className='flex flex-col  after: items-center  
         my-8 w-full lg:flex-row   '>
        <div className='flex items-center flex-col mx-36  my-6 lg:mx-12     '>
          <img src="./Community_icon/Icon.png" alt="" />
          <h1 className='text-3xl font-bold'>Membership Organisations</h1>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className='flex items-center flex-col mx-36  my-6 lg:mx-12    '>
          <img src="./Community_icon/Group 1.png" alt="" />
          <h1 className='text-3xl font-bold'>National <br/>Associations</h1>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className='flex items-center flex-col mx-36  my-6 lg:mx-12    '>
          <img src="./Community_icon/Vector.png" alt="" />
          <h1 className='text-3xl font-bold'>Clubs <br/> And Groups</h1>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
      
      </div>
    </div>
  )
}

export default CommunitySection

