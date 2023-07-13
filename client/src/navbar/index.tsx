import React from 'react'
import './index.css'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <img src={Logo} alt="" className="logo" draggable="false" />
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Releases</a></li>
          <li><a href="#">Reach Out</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar