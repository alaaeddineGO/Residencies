import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='container-H'>
      <div className='content-H'>
        <div className='logo-H'></div>
        <ul>
            <li>Residencies</li>
            <li>Our Value</li>
            <li>Contact Us</li>
            <li>Get Started</li>
            <li><button>Contact</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Header