import React from 'react'
import './Content.css'
import illustration1 from '../../images/illustration 1.png'
import illustration2 from '../../images/illustration-2.svg'
import mobilebg from '../../images/bg-curve-mobile.svg'
import arrow from '../../images/icon-arrow.svg'
import avatar from '../../images/avatar-testimonial.jpg'

const Content = () => {
  return (
    <>
        <div className='content'>
            <img src={illustration1} alt='illustration 1' />
            <span className='right'>
                <h2>All your files in one secure location, accessible anywhere</h2>
                <p>Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.</p>
                <input type='email' placeholder='Enter your email...' id='email' />
                <button type='submit' id='get-started'>Get Started</button>
            </span>
            
        </div>
        <div className='lower-body'>
            < img src={mobilebg} alt='mobilebg' />
            <div className='span'>
                <img src={illustration2} alt='illustration 2' id='illustration2' />
                <div>
                    <h4 className='stay'>Stay productive, wherever you are</h4>
                    <p>Never let storage be an  issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                    <p>Securely share files and folders with friends, family and colleague for live collaboration. No email attachment is required!</p>
                    <a href='/' className='greenlink'>See how Fylo works <img src={arrow} alt='arrow' id='arrow' /></a>
                    <hr />

                    <div className='card'>
                        <p className='ap'>"</p>
                        <p className='info'>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                        <img src={avatar} alt='avatar' id='avatar'/>
                        <h6 className='name'>Kyle Burton</h6>
                        <p className='founder'>Founder & CEO, Huddle</p>
                    </div>
                </div>
                
            </div>
            
        </div>
    </>
  )
}

export default Content