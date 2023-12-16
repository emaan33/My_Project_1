import React, { useState } from 'react'
import insta from '../images/002-instagram.png'
import facebook from '../images/001-facebook.png'
import spotify from '../images/013-spotify.png'
import linkedin from '../images/005-linkedin.png'
import tiktok from '../images/008-tik tok.png'
import twitter from '../images/003-twitter.png'
import telegram from '../images/010-telegram.png'
import GetForm from '../GetR/GetForm'
import AmFollowersIndex from '../AmFollowers/AmFollowersIndex'
import AmFformm from '../AmFollowers/AmFformm'
const BuyF = () => {
  const[back,setback] = useState(true)
  const[amount,setamount] = useState(true)
  return (
  <div>
    {
      amount===true?  back===true?  <div className='followers-parent'>
      <div className="followers">
        <p className='para-para'>
        Buy Followers
        </p>
   
   <p className='light-text'>Select a service</p>
   
   <div className="icon-parent">
   <div className='midle-icon'>
   <div className="small-icons">
   <img src={insta} alt="" />
   </div>
   <div className="small-icons">
    <img src={facebook} alt="" />
   </div>
   <div className="small-icons">
    <img src={spotify} alt="" />
   </div>
   </div>
   <div className='midle-icon'>
   <div className="small-icons">
    <img src={linkedin} alt="" />
   </div>
   <div className="small-icons">
    <img src={tiktok} alt="" />
   </div>
   <div className="small-icons">
    <img src={twitter} alt="" />
   </div>
   </div>
   
   <div className="small-icons">
    <img src={telegram} alt="" />
   </div>
   
   </div>
   
   <div className="am-login-btns-get">
    <button onClick={()=>(setback(false))} className='cancel-login'>Back</button>
    
    <button onClick={()=>(setamount(false))}  className='send-login'>Next</button>
    </div>
      </div>
    </div> : <GetForm /> : <AmFformm />
    }
  </div>
  )
}

export default BuyF
