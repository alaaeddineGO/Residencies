import React from 'react'
import CardContactUs from '../../components/CardContactUs/CardContactUs'
import './ContactUs.css'
function ContactUs() {
  return (
    <div className='ContactUs-container'>
        <div className='side-left-ContactUs'>
            <h3 className='orangeText'>Our Contact Us </h3>
            <h2 className='primaryText '>Easy to contact us</h2>
            <p>We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better</p>
            <div className='content-ContactUs'>
                <CardContactUs/>
                <CardContactUs/>
                <CardContactUs/>
                <CardContactUs/>
            </div>
        </div>
        <div className='side-rigth-ContactUs'>
            <div className='cader cader-cont'> 
            </div>
        </div>
        
    </div>
  )
}

export default ContactUs