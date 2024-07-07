import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import { FaLocationDot } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

function Home() {
  return (
    <div className='container-Ho'>
      <Header/>
      <div className='content-Ho'>
      <div className='left-side-Ho'>
        <h2>Discover <br/>Most Suitable Property</h2>
        <p>Find a variety of properties that suit you very easilty <br/>
            Forget all difficulties in finding a residence for you</p>
        <div className='inp-con'>
        <div className='inp l'><FaLocationDot /></div>
        <input type='text'></input>
        <div className='inp r'><button>Search</button></div>
        </div>
        <div className='numbers-Ho'>
          <div className='Prem-Pro'>
            <h3>9,000 <span><FaPlus /></span></h3>
            <h4>Premium Product</h4>
          </div>
          <div className='Hap-Cust'>
            <h3>2,000 <span><FaPlus /></span></h3>
            <h4>Happy Customer</h4>
          </div>
          <div className='Awar-Win'>
            <h3>28 <span><FaPlus /></span></h3>
            <h4>Awards Winning</h4>
          </div>
        </div>
      </div>
      <div className='right-side-Ho'>
        <div className='cader'>
          
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home