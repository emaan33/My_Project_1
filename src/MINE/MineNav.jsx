import React from 'react'
import logo from '../images/Logo.png'
import order from '../images/order.png'
const MineNav = () => {
  return (
    <div>
        <div className="navbar">

<div className="logo">
    <img src={logo} alt="logo" />
</div>

<div className='right'>
<div className="order-links">
    <a  href="">Contact</a>
    <div>
   <img src={order} alt="" />
   
   </div>
</div>
<div className='btn'>
<button className='me' >Buy Followers</button>
</div>
</div>
</div>
    </div>
  )
}

export default MineNav
