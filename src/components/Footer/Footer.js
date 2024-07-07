import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='Footer-container'>
        <div className='side-left-footer'>
            <div className='logo-H'></div>
            <p style={{color: '#adaead'}}>Our vision is to make all people <br/>
                the best place to live for them.</p>
        </div>
        <div className='side-right-footer'>
            <h2 style={{fontSize: '40px',fontWeight:'700' , color: '#1f3e72'}}>Information</h2>
            <p style={{fontSize: '15px',fontWeight:'400' , color: '#909492'}}>145 New York, FL 5467, USA</p>
            <ul>
                <li id='dddd'>Property </li>
                <li>Services </li>
                <li>Product </li>
                <li>About Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer