import React from 'react'
import './OurValue.css'
import CardOurValue from '../../components/CardOurValue/CardOurValue'

function OurValue() {
  return (
    <div className='OurValue-container'>
        <div className='side-left-OurValue'>
          <div className='cader-OurValue'>
          </div>
        </div>
        <div className='side-right-OurValue'>
          <h3 className='orangeText'>Our Value</h3>
          <h2 className='primaryText '>Value We Give to You</h2>
          <p>We always ready to help by providijng the best services for you.
                We beleive a good blace to live can make your life better</p>
          <div className='cards-OurValue'>
          <CardOurValue />
          <CardOurValue />
          <CardOurValue />

          </div>
        </div>
    </div>
  )
}

export default OurValue