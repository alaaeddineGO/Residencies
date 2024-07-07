import React from 'react'
import './CardContactUs.css'
import { IoIosCall } from "react-icons/io";
function CardContactUs() {
  return (
    <div className='CardContactUs-container' >
        <div className='head-CardContactUs'>
            <div className='ico-CardContactUs'><IoIosCall/></div>
            <div className='inf-CardContactUs'>
                <h4>Call</h4>
                <h5>+57 157 185 125</h5>
            </div>
        </div>
        <button>Call now</button>
      
    </div>
  )
}

export default CardContactUs