'use client'
import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
    const [showNav,setShowNav] = useState(false)

    const showNavHandler = () => setShowNav(true)
    const closeNavHandler = () => setShowNav(false)

  return (
    <div>
      <Nav openNav={showNavHandler} />
      <MobileNav closeNav={closeNavHandler} showNav={showNav} />
    </div>
  )
}

export default ResponsiveNav
