import React,{useState} from 'react'
import backgound from '../images/login-bg.png'
const ForgetForm = () => {


const[email,setEmail]= useState("")



  return (
    <div className='login'>
<img className='login-bg' src={backgound} alt="" />
<div className="login-form">

  <div className='login-para'>
<p >Forget Password</p>
</div>

<label htmlFor="" className='mail'>Enter your Email to get a rest password link. </label>
<input value={email}  onChange={(e)=>{setEmail(e.target.value)}}  className='login-email' placeholder='Enter your email' type="text" /> <br />



<div className="login-btns">
<button className='cancel-login'>Cancel</button>

<button className='send-login'>Log In</button>
</div>

</div>

    </div>
  )
}

export default ForgetForm
