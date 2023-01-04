import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__title'>Zaap</div>
      <div className='navbar__links'>
        <Link className='navbar__links_item' to='/home'>Home</Link>
        <Link className='navbar__links_item' to='/about'>About</Link>

      </div>
      
    </div>
  )
}

export default Navbar