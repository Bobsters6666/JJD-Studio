import './index.css'
import arrowDown from '../../assets/icons/arrow-down.svg'

const Hero = () => {
  return (
    <>
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
      {/* Elipses */}
      <div className='hero-ellipse-1 ellipse-1'></div>
      <div className='hero-ellipse-2 ellipse-1'></div>
    </>
    
  )
}

export default Hero