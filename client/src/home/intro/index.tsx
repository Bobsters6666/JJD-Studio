import './index.css'
import Rocket from '../../assets/Saly-43.png'

const Intro = () => {
  return (
    <div className='intro desktop' id="intro">
      <div>
        <img src={Rocket} alt="" className="src" draggable="false" />
        <div className='intro-rightside'>
          <h4 className="h4">architechture</h4>
          <h2>we don't just design games, we design experiences</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus lacus quis libero luctus eleifend. Suspendisse potenti. Etiam pretium semper diam, a sagittis magna iaculis nec. Phasellus et tempus risus,</p>
          <button>reach out</button>
        </div>
      </div>

      {/*  */}
      <div className='ellipse-1 intro-ellipse-1'></div>
    </div>
  )
}

export default Intro