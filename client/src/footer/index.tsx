import './index.css'
import Logo from '../assets/logo.png'
import { useRef } from 'react'

const Footer = () => {
  const emailRef = useRef(null)

  return (
    <div className='footer'>
      <div className='desktop container'>
        <img src={Logo} alt="" className="src" />
        <div>
          <h5>studio</h5>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Releases</a></li>
          </ul>
        </div>
        <div>
          <h5>pre-registration</h5>
          <ul>
            <li><a href="#">Testing</a></li>
            <li><a href="#">More info</a></li>
          </ul>
        </div>
        <div>
          <h5>Socials</h5>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Linkedin</a></li>
          </ul>
        </div>
        <div>
          <h5>join our newsletter</h5>
          <div className='send-email'>
            <input type="email" name="email" placeholder='Email' ref={emailRef}></input>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer