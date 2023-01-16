import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar({profile}) {
  return (
    <div className='navbar'>
      <Link to='/'><div className='navbar__title'><h3>Zaap</h3></div></Link>
      <div className='navbar__links'>
        <Link className='navbar__links_item' to='/home'>Orders</Link>
        <Link className='navbar__links_item' to='/about'>About</Link>
        {!profile ? <><Link className='navbar__links_item' to='/login'>Login</Link></> : <><Link className='navbar__links_item' to='/login'>Logout</Link></>}
        
      </div>
      
    </div>
  )
}

export default Navbar