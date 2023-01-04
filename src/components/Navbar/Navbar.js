import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__title'>Zaap</div>
      <div className='navbar__links'>
        <a className='navbar__links_item' href='/home'>Home</a>
        <a className='navbar__links_item' href='/about'>About</a>

      </div>
      
    </div>
  )
}

export default Navbar