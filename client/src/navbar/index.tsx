import { useRef } from 'react'
import './index.css'
import Logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'

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
          <li><a href="#">About Us</a></li>
          <li><a href="#">Releases</a></li>
          <li><a href="#">Reach Out</a></li>
        </ul> 
        <div className='menu-button' onClick={showNavbar}>
          <FontAwesomeIcon icon={faHamburger} />
        </div>
      </div>
    </div>
  )
}

export default Navbar