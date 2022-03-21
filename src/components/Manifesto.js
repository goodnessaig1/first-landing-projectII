import React from 'react'
import Footer from './Footer'
import Icons from './Icons'
import './Manifesto.css'

function Manifesto() {
  return (
      <div className='container'>
    <div className='manifesto-container'>
        <div className='man-component'>
            <h1 className='why'>Why Choose Us</h1>
            <p className='ndalemm'>
            Ndalem.io is committed to helping its clients to reach thier goals.
            </p>
        </div>
        
    </div>
    <Icons/>
    <Footer/>
    </div>
  )
}

export default Manifesto