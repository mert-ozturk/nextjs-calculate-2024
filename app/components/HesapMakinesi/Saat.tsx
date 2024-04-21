'use client'
import React, { useEffect, useState } from 'react'
import ilkbahar from '@/public/images/ilkbahar.jpg'
import yaz from '@/public/images/ilkbahar.jpg'
import Image from 'next/image'
const Saat = () => {
    const [time,setTime] = useState(new Date())
  
    useEffect(()=>{
      const interval = setInterval(()=>{
          setTime(new Date())
      },1000)   
    return () => clearInterval(interval)  
  },[])

    

     
    

    
  return (
    <main className="flex items-center justify-center container  flex-col lg:flex-row gap-8 lg:gap-10">
      <article
    className="relative w-48 h-48 lg:w-56 lg:h-56 xl:w-60 xl:h-60 inline-grid place-content-center text-center border-8 border-[#191919] rounded-full before:rounded-full after:rounded-full after:absolute before:absolute before:-inset-2 pie no-round"
     
  >
    <h3
      className="font-bold text-base lg:text-lg xl:text-xl flex flex-col gap-1 lg:gap-3"
    > {time.toLocaleTimeString()}<span
    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
    id="hour"
  ></span>
   
</h3>
     
      <h2>{time.toLocaleDateString()}</h2>
     
       
    
      </article> 
    
      </main>
  )
}

export default Saat
