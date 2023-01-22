import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';

function Navbar({profile}) {

  const [first, setfirst] = useState(false)

  return (

    <div className='navbar'>
      <Link to='/'><div className='navbar__title'><h3>Zaap</h3></div></Link>
      <MenuIcon onClick = {() => {setfirst(!first)}} className ='menu__icon'/>
      {first && 
      <div className='navbar__links'>
        <Link onClick = {() => {setfirst(!first)}} className='navbar__links_item' to='/home'>Orders</Link>
        <Link onClick = {() => {setfirst(!first)}} className='navbar__links_item' to='/about'>About</Link>
        {!profile ? <><Link className='navbar__links_item' to='/login'>Login</Link></> : <><Link className='navbar__links_item' to='/login'>Logout</Link></>}
        
      </div>
    }
    </div>
  )
}

export default Navbar