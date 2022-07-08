import React from 'react'
import './Footer.css'
import logo from '../../images/logo.svg'
import phone from '../../images/icon-phone.svg'
import email from '../../images/icon-email.svg'


const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <img src={logo} alt='logo' id='footer-logo' />
            <p><img src={phone} alt='phone' id='phone' />   Phone: +1-543-123-4567</p>
            <p><img src={email} alt='email' id='email-icon' />   example@fylo.com</p>
        </div>
        
        <ul>
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
        </ul>
        <ul>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
        </ul>
    </div>
  )
}

export default Footer