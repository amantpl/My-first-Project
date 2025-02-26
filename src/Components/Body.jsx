import React from 'react'

const Body = () => {
  return (
    <div className='space-y-4 lg:flex'>
      <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end">
      <img src="./assets/Blue-Shape.svg" alt="1st" className='h-64 -rotate-45 md:h-72 lg:h-[400px]'/>
      <img src="./assets/Pink-Shape.svg" alt="2nd" className='absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]'/>
      <img src="./assets/Purple-Shape.svg" alt="3rd" className='absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]'/>
      <img src="./assets/Hero-Model.png" alt="hero" className='absolute h-64 md:h-72 lg:h-[400px]'/>
      </div>
      <div className='lg:flex-1 lg:order-1'>
      <h1 className='text-5xl font-bold leading-tight font-playfair'>Host your website in less than 5 minutes</h1>
      <p className='text-gray-400 font-lato'>With Hoster , get your website up and running in no less than 5 minutes with the most competetive pricing packages available online.</p>
      <form action="" className='flex flex-col gap-4'>
        <input className="px-4 py-3 rounded-md placeholder:text-gray-400" type="email" placeholder='Enter email address'/>
        <button className='px-4 py-3 text-white bg-blue-400 rounded-md hover:bg-blue-600'>Join Waitlist</button>
      </form>
      <div className='flex gap-2'>
        <img src="./assets/Checkmark.svg" alt="check" />
        <p className='text-gray-400 font-lato'>No spam ,ever . Unsubscibe anytime</p>
      </div>
      </div>
    </div>
  )
}

export default Body