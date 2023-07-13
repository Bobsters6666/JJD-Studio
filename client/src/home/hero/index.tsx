import React from 'react'
import './index.css'
import arrowDown from '../../assets/icons/arrow-down.svg'

const Hero = () => {
  return (
    <div className='hero desktop'>
      <div>
        <h1 className='h1'>JJD STUDIO</h1>
        <h4>the best gaming studio in town, <br />lorem ipsum dorjt ipsum</h4>
      </div>

      <div className='learn-more'>
        <a href="#intro"><img src={arrowDown} alt="" draggable="false"/></a>
        <h4>Learn more</h4>
      </div>
    </div>
  )
}

export default Hero