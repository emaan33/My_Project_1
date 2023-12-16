import React, { useState } from 'react'
import MinrForm from '../MINE/MinrForm'

const AmForm = () => {
    const[plateform,setplateform]= useState("")
    const[follow,setfollow]= useState("")
    const[link,setlink]= useState("")
    const[back,setback] = useState(true)
  return (
<div>
  {
    back===true?     <div className='am-login'>
    <div className="login-form-am">
    
      <div className='orderno'>
        <div className="order-order">
   <div ><p className="orderdiv" >Order# 1</p></div> 
   </div>
    <div className="invo">
      <div className='invoice'>
      <label htmlFor="invoice">Download Invoice</label>
      <input className='input-file' type="file" name="invoice" id="invoice" />
      </div>
    </div>
    </div>
    <div className="get-inside">

        <div className="platform">
    <label htmlFor="" className='mail'>Platform</label>
    <input value={plateform} onChange={(e)=>{setplateform(e.target.value)}}  className='design-input'  placeholder='Instagram' type="text" /> <br />
    </div>
    <div className="followers-amount">
    <label htmlFor="" className='mail'>Followers</label>
    <input value={follow} onChange={(e)=>{setfollow(e.target.value)}}  className='design-input' placeholder='1000' type="text" /> <br />
    </div>
    </div>
    <label htmlFor="" className='psswd'>Your account Link</label>
    <input value={link} onChange={(e)=>{setlink(e.target.value)}}  className='login-password-am' placeholder='https://www.instagram.com/user1234' type="password" /> <br />
    
    <div className="total">
        <p className='para-num'>1000 x 0.05 = $50</p>
<p className='para-total'>Total Amount: <span className='am-span'>$50</span> </p>
    </div>
    <div className="am-login-btns">
    <button onClick={()=>(setback(false))} className='cancel-login'>Back</button>
    
    <button  className='send-login'>Re Order</button>
    </div>
    </div>
  </div>: <MinrForm />
  }
</div>
  )
}

export default AmForm
