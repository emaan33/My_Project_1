import React, { useState } from 'react'

const AmFformm = () => {

const[service,setservice] = useState("")
const[link,setlink] = useState("")
const[quan,setquan] = useState("")

  return (
    <div>
           <div className='am-login'>
    <div className="login-form-am">
    
      <div className='orderno-buy'>
   <div className="orderdiv-buy"><p >Buy Followers</p></div> 
    </div>
    

        <div className="platform">
    <label htmlFor="" className='mail'>Service Type</label>
    <input  value={service}  onChange={(e)=>{setservice(e.target.value)}}  className='design-input-follow'  placeholder='Instagram Followers - [Good Quality] [365 Days Refill] [Max 5M] [Speed 50K/Day]' type="text" /> <br />
    </div>
    <div className="followers-account">
    <label htmlFor="" className='mail'>Your account Link</label>
    <input  value={link}  onChange={(e)=>{setlink(e.target.value)}}  className='design-input-follow' placeholder='https://www.instagram.com/user1234' type="text" /> <br />
    </div>
    
    <label htmlFor="" className='psswd'>Quantity</label>
    <input  value={quan}  onChange={(e)=>{setquan(e.target.value)}}  className='login-password-am' placeholder='1000' type="number" /> <br />
    



    <div className="total">
        <p className='para-num'>1000 x 0.05 = $50</p>
<p className='para-total'>Total Amount: <span className='am-span'>$50</span> </p>
    </div>
    <div className="am-login-btns">
    <a href='/homepage' className='cancel-login'>Cancel</a>
    
    {
  service!="" && link!=""&& quan!=""?  <button  className='send-login'>Proceed to Payment</button> : ""
}

    </div>
    </div>
  </div>
    </div>
  )
}

export default AmFformm
