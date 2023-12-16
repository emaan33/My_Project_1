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
        <div> <a className='link-contact' href="">Contact</a>
        <a href="/login">Log In</a></div>
    <div className="links">
   

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

