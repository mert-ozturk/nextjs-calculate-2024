'use client'
import React, { useEffect, useState } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import Saat from './Saat'
 
 

const HesapMakinesi = ( ) => {

    const [number,setNumber] = useState('')
    const [result,setResult] = useState('')
    const [ac,setAc] = useState('AC')
  
    const ops = ['+','-','*','/','%']
    
 const onNumberList = (e) => {
    setNumber(number + e.target.value)
      setAc('C')
 }

 const toggleButton = () => {
  setAc('AC')
  onDelete()
 
};


const onOperator = (e) => {
  if(number === ''  ){
  setNumber(number)
} else if (ops[0] === '+' ){
  setNumber(number + e.target.value) 
}  
} 

 
 

 const onToplam = () =>{
   try{
    setNumber(eval(number.toString()))
    setResult(eval(number))
   } catch {
    setNumber('Error Number')
   }
 }

 

 
 
  const onDelete = () => {
    setNumber('')
    setResult('')
    
}

const onSpace = () => {
    setNumber(number.slice(0,-1))
}
 


 
 
  return (
    <div className='flex items-center justify-center'>
  <div  className='flex max-w-sm rounded overflow-hidden shadow-lg  justify-center ' >
  <div className='mt-[0.6rem] text-white p-2 sm:p-4 leading-[2rem] md:text-[15px] lg:text-[15px] text-[17px] xl:text-[20px] justify-center' >
 <div  className="rounded-xl bg-black p-6 text-center shadow-xl custom bg-banner-bg bg-center">
   
  <input value={result || '0'}   className=" py-[0.1rem] mb-[0.3rem]   outline-none text-red-900  bg-yellow-300 rounded-md  "  placeholder="0"   />
  <input value={number ||'0'} onChange={onToplam}    className="py-[0.5rem] mb-[0.5rem] outline-none text-white bg-gray-800 rounded-md  " placeholder="0" />

<div className='flex items-center   '> 

<button  onClick={toggleButton} className='py-[0.4rem] mb-[1.5rem]   text-white bg-red-600
      hover:bg-blue-950 rounded-md px-5 m-auto '> <p   > {ac} </p> </button>
       <button onClick={onSpace} className='flex items-center py-[0.4rem] mb-[1.5rem]   text-white bg-yellow-700
      hover:bg-blue-950 rounded-md px-5 m-auto' ><IoArrowBack  /> DEL</button>  
       
         <button value="."  onClick={onNumberList} className='py-[0.4rem] mb-[1.5rem]    text-white bg-gray-600
      hover:bg-pink-800 rounded-md px-5 m-auto' >.</button>
     <button value="="  onClick={onToplam} className='py-[0.4rem] mb-[1.5rem]    text-white bg-green-600
      hover:bg-pink-800 rounded-md px-5 m-auto' >=</button>
     
    </div>
    <div className='flex items-center   '>  
    
    {
    ops.map((i,r)=>(
       <button className='py-[0.4rem] mb-[1.5rem]    text-white bg-red-800
       hover:bg-blue-950 rounded-md px-5 m-auto'value={i}  onClick={onOperator} key={r}>{i}</button>
      ))}

</div>
    <div className='flex items-center   '>  
 <button value="1" onClick={onNumberList}  className='py-[0.4rem] mb-[1.5rem]   text-white bg-blue-900
      hover:bg-blue-950 rounded-md px-5 m-auto' >1</button>
  <button value="2" onClick={onNumberList} className='py-[0.4rem] mb-[1.5rem]    text-white bg-blue-900
      hover:bg-blue-950 rounded-md px-5 m-auto'>2</button>
  <button value="3" onClick={onNumberList} className='py-[0.4rem] mb-[1.5rem]    text-white bg-blue-900
      hover:bg-blue-950 rounded-md px-5 m-auto'>3</button>
        <button value="4" onClick={onNumberList}  className='py-[0.4rem] mb-[1.5rem]    text-white bg-blue-900
      hover:bg-blue-950 rounded-md px-5 m-auto' >4</button>
  <button value="5" onClick={onNumberList} className='py-[0.4rem] mb-[1.5rem]    text-white bg-blue-900
      hover:bg-blue-950 rounded-md px-5 m-auto'>5</button>
       </div>
       <div className='flex items-center   '>
      <button value="6" onClick={onNumberList} className='py-[0.4rem] mb-[1.5rem]    text-white bg-blue-900
      hover:bg-blue-950 rounded-md px-5 m-auto'>6</button>
 <button value="7" onClick={onNumberList} className='py-[0.4rem] mb-[1.5rem]    text-white bg-blue-900
      hover:bg-blue-950 rounded-md px-5 m-auto'>7</button>
      <button value="8" onClick={onNumberList}  className='py-[0.4rem] mb-[1.5rem]    text-white bg-blue-900
      hover:bg-blue-950 rounded-md px-5 m-auto' >8</button>
     <button value="9" onClick={onNumberList} className='py-[0.4rem] mb-[1.5rem]    text-white bg-blue-900
      hover:bg-blue-950 rounded-md px-5 m-auto'>9</button>
         <button value="0" onClick={onNumberList} className='py-[0.4rem] mb-[1.5rem]    text-white bg-blue-900
      hover:bg-blue-950 rounded-md px-5 m-auto'>0</button>
      </div>
       
</div> </div>
 

</div> </div>
  
    
    
  )
}

export default HesapMakinesi
