import { useRef } from 'react'
import './index.css'
import Logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const navRef = useRef<HTMLUListElement>(null)

  const showNavbar = () => {
    if (navRef.current != null) {
      navRef.current.classList.toggle("responsive-nav")
      console.log(navRef.current.classList)
    }
  }

  return (
    <div className='navbar'>
      <div>
        <img src={Logo} alt="" className="logo" draggable="false" />
        <ul ref={navRef}>
          <Link to="/about"><li><a href="#">About Us</a></li></Link> 
          <li><a href="#">Releases</a></li>
          <li><a href="#">Reach Out</a></li>
          <div className='nav-x' onClick={showNavbar}><FontAwesomeIcon icon={faTimes} /> </div>
        </ul> 
        <div className='menu-button' onClick={showNavbar}>
          <FontAwesomeIcon icon={faHamburger} />
        </div>
      </div>
    </div>
  )
}

export default Navbar