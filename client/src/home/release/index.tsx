import './index.css'
import Meta from '../../assets/Saly-19.png'

const Release = () => {
  return (
    <div className='release desktop' id="release">
      <h2 className='sub-heading'>What to Expect?</h2>
      <div>
        <div className='releases-leftside'>
          <h4 className="h4">our work</h4>
          <h2>our big release is just around the corner</h2>
          <p>Our team has been working super hard on this game. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus lacus quis libero luctus eleifend. Suspendisse potenti. Etiam pretium semper diam, a sagittis magna iaculis nec. Phasellus et tempus risus,</p>
          <button>reach out</button>
        </div>
        <img src={Meta} alt="" className="src" draggable="false" />
      </div>
    </div>
  )
}

export default Release