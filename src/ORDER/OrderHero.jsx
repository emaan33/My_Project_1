import React from 'react'
import girl from '../images/girl.png'
const OrderHero = () => {
  return (
    <div>
      <div className="hero">
   <div className="heroLeft">
  
<p className='bold-para'>Unlock Your Social Media Potential with us.</p>
<p className='light-para'>The Ultimate Platform for Boosting Your Influence Across Social Media.</p>
<button className='Aud-btn'>Grow Your Audience</button>
   </div>
   <div className="heroRight">
    <img className='girl-img' src={girl} alt="girl" />
   </div>
</div>
    </div>
  )
}

export default OrderHero
