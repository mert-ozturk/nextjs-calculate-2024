import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-black'>
    <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem] items-start pb-[2rem] border-b-2 border-white border-opacity-10'>
     <div> 
     <h1 className='text-[24px] text-white mb-[1rem] font-bold uppercase'>
      Jobi Fy
     </h1>
     <p className='text-[14px] text-white text-opacity-70'>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cumque blanditiis incidunt impedit quam molestiae
     </p>
    <div className='mt-[1.5rem] flex items-center space-x-3'>
    <div className='w-[2.4rem] h-[2.4rem] bg-blue-700 rounded-full flex items-center justify-center flex-col'>
      <FaFacebookF className='text-white'/>
      </div>
      <div className='w-[2.4rem] h-[2.4rem] bg-blue-500 rounded-full flex items-center justify-center flex-col'>
      <FaTwitter className='text-white'/>
      </div>
      <div className='w-[2.4rem] h-[2.4rem] bg-red-600 rounded-full flex items-center justify-center flex-col'>
      <FaYoutube className='text-white'/>
      </div>
      <div className='w-[2.4rem] h-[2.4rem] bg-pink-500 rounded-full flex items-center justify-center flex-col'>
      <FaInstagram className='text-white'/>
      </div>
      </div>
     </div>
    <div>
      <h1 className='text-[22px] w-fit text-white font-semibold mb-[1.5rem]'>
        About US
      </h1>
    <p className='text-[13px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-70 mb-[0.7rem]'>
      Job
    </p>
    <p className='text-[13px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-70 mb-[0.7rem]'>
      Privacy
    </p>
    <p className='text-[13px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-70 mb-[0.7rem]'>
      Police
    </p>
    <p className='text-[13px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-70 mb-[0.7rem]'>
      Application
    </p>
    </div>
    <div>
      <h1 className='text-[22px] w-fit text-white font-semibold mb-[1.5rem]'>
      Quick Link
      </h1>
    <p className='text-[13px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity mb-[0.7rem]'>
    All Jobs
    </p>
    <p className='text-[13px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity mb-[0.7rem]'>
    Job details
    </p>
    <p className='text-[13px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity mb-[0.7rem]'>
    How to Apply
    </p>
    <p className='text-[13px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity mb-[0.7rem]'>
    Resume
    </p>
    </div>

    <div>
      <h1 className='text-[22px] w-fit text-white font-semibold mb-[1.5rem]'>
      Get in Touch
      </h1>
    <p className='text-[13px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-70 mb-[0.7rem]'>
    +123 345 638763
    </p>
    <p className='text-[13px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-70 mb-[0.7rem]'>
    example@gmail.com
    </p>
    <p className='text-[13px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-70 mb-[0.7rem]'>
    Dhaka,Tangail Bangladesh
    </p>
    </div>
    </div>
    </div>
  )
}

export default Footer