import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header-container' >

        <div className='header-component' >
            <div className='header-name'>
                Ndalem.oi
            </div>
            <div className='header-rent'>
                Rentals
            </div>
            <div className='header-sales'>
                Sales
            </div>
            <div  className='header-build'>
                Building
            </div>
            <div className='header-agent'>
                Agent
            </div>
            <div className='header-cont'>
                Contact US
            </div>
            <div className='header-log'>
                Log in
            </div>
            <div className='header-sign'>
                Sign Up
            </div>
        </div>
        <div className='component'>
            Find Your Next
        </div>
        <div className='perfect'>
            Perfect Place <list style={{ color: '#fff' }} >To Live</list>
        </div>
        <list className='ndalem-section'>
        Ndalem.oi offers selling, buying, renting and providing transparency 
    </list><br/>
    <list className='ndalem-section'>

        and an almost seamless end-end service.
        </list>
        <h2 className='started'>
            Get Started
        </h2>
        <h2 className='learn'>
            Learn More
        </h2>
        <i className='needed'></i>
    </div>
  )
}

export default Header