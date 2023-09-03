import React from 'react'
import logo from '../images/Logo.png'

const Navbar = () => {
  return (
    <div>
<div className="navbar">

    <div className="logo">
        <img src={logo} alt="logo" />
    </div>
    
    <div className='right'>
    <div className="links">
        <a href="">Contact</a>
        <a className='login' href="">Log In</a>
    </div>
<div className='btn'>
    <button className='me' >Buy Followers</button>
</div>
</div>
</div>

    </div>
  )
}

export default Navbar

