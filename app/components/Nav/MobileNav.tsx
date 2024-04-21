import Link from 'next/link'
import React from 'react'
import { ImCross } from 'react-icons/im'

interface Props{
    showNav: boolean;
    closeNav:()=> void;
}

const MobileNav = ({showNav,closeNav}:Props) => {
    const navOpenStyle = showNav ? "translate-x-0":"translate-x-[-100%]"


  return (
    <div>
     <ul className={`text-white ${navOpenStyle}  fixed flex top-0 items-center justify-center flex-col h-[100vh] transform
     transition-all duration-300 delay-300 w-[80%] sm:w-[60%] bg-black space-y-10 z-[10006]`}>
     
      <li className='navlink text-[25px] sm:text-[30px]'>
        <Link href="#">Home</Link>
      </li>
      <li className='navlink text-[25px] sm:text-[30px]'>
        <Link href="#">About</Link>
      </li>
      <li className='navlink text-[25px] sm:text-[30px]'>
        <Link href="#">Contact</Link>
      </li>
      <ImCross onClick={closeNav}  className='absolute top-[-1.4rem] right-[1.4rem] w-[1.4rem] h-[1.4rem] text-white' />
      </ul>
      </div>
    
    
  )
}

export default MobileNav
