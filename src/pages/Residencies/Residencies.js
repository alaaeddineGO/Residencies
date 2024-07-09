import React from 'react'
import './Residencies.css'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import CardResidencies from '../../components/CardResidencies/CardResidencies';
function Residencies() {
  return (
    <div className='Residencies-container'>
      <div className='head-Residencies'>
        <div className='pa-Residencies'>
          <h3 className='orangeText'>Best Choices</h3>
          <h2 className='primaryText '>Popular Residencies</h2>
        </div>
        
      </div>
      <div className='content-Residencies'>
        <CardResidencies />
      </div>
    </div>
  )
}

export default Residencies