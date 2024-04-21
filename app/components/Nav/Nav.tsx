import Link from 'next/link'
import React from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'

interface Props {
    openNav:() =>void
}

const Nav = ({openNav}:Props) => {
  return (
    <div className='h-[6vh] bg-[#ffffff]'>
          <div className='flex items-center justify-between w-[90%] xl:w-[21%] h-full mx-auto'>
        <ul className='lg:flex hidden text-black items-center space-x-6 xl:space-x-10'>
        <li className='navlink'>
            <Link href="#">Home</Link>
        </li>
        <li className='navlink'>
            <Link href="#">About</Link>
        </li>
        <li className='navlink'>
            <Link href="#">Contact</Link>
        </li>
      </ul>
      <HiBars3BottomRight onClick={openNav} className='w-[2rem] text-black h-[2rem] lg:hidden' />
    </div>
    </div>

    
  )
}

export default Nav
