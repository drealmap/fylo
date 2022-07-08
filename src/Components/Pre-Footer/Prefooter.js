import React from 'react'
import './Prefooter.css'

const Prefooter = () => {
  return (
    <div className='prefooter'>
      <div className='inform'>
        <h3>Get early access today</h3>
        <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
      </div>

      <div>
        <input type='email' placeholder='email@example.com' id='input' />
        <button type='submit' id='submit'>Get Started For Free</button>
      </div>
        
        
    </div>
  )
}

export default Prefooter