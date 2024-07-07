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
        <div className='arow-Residencies'>
            <span className='A-l'> <FaArrowLeft /> </span>
            <span className='A-r'> <FaArrowRight /> </span>
        </div>
      </div>
      <div className='content-Residencies'>
        <CardResidencies />
        <CardResidencies />
        <CardResidencies />
        <CardResidencies />
      </div>
    </div>
  )
}

export default Residencies