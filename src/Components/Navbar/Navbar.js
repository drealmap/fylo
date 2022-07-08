import React from 'react'
import './Navbar.css'
import logo from '../../images/2022-07-07 (2).png'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <img src={logo} alt='logo' />
        <span>
        <a href='/'>Features</a>
        <a href='/'>Team</a>
        <a href='/'>Sign In</a>
        </span>
        
    </div>
  )
}

export default Navbar