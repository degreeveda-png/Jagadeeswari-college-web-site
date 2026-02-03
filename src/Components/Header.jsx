import React from 'react'
import './Header.css'
// import './nav.css'
import logo from '../../public/Image/logo veda.jpg'
const Header = () => {
  return (
    <div id="container">
      <div id="sample"></div>
      <h1 id="header">VEDA DEGREE COLLEGE</h1>
      <img src={logo} height="150px" width="200px"></img>
      <div id="nav">
        <nav id="nav1">
          <a href="#sample">Home</a>
          <a href="#about">About</a>
          <a href="#courses">courses</a>
          <a href="#footer">contact</a>


        </nav>
      </div>
    </div>
  )
}

export default Header
