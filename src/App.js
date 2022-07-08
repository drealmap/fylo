import React from 'react'
import './App.css'
import Content from './Components/Body/Content'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Prefooter from './Components/Pre-Footer/Prefooter'


const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Content />
      <Prefooter />
      <Footer />
    </div>
  )
}

export default App