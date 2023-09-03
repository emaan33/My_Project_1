import React,{useState} from 'react'
import backgound from '../images/login-bg.png'
const LoginForm = () => {

const[email,setEmail]= useState("")

const[password,setpassword]= useState("")
  return (
    <div className='login'>
<img className='login-bg' src={backgound} alt="" />
<div className="login-form">

  <div className='login-para'>
<p >Log In</p>
</div>

<label htmlFor="" className='mail'>Email</label>
<input value={email}  onChange={(e)=>{setEmail(e.target.value)}}  className='login-email' placeholder='Enter your email' type="text" /> <br />
<label htmlFor="" className='psswd'>Password</label>
<input value={password}  onChange={(e)=>{setpassword(e.target.value)}}  className='login-password' placeholder='Enter your password' type="password" /> <br />


<div className="login-btns">
<button className='cancel-login'>Cancel</button>

<button className='send-login'>Log In</button>
</div>

<div className="bottom-text">
<p className='iamfirst'>Don’t have any account. Sign up now.</p>
<p className='iamsecond'>Forget Password?</p>
</div>

</div>

    </div>
  )
}

export default LoginForm
