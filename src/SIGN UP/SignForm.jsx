import React,{useState} from 'react'
import backgound from '../images/login-bg.png'
const SignForm = () => {
  const[name,setname]= useState("")

const[email,setEmail]= useState("")

const[password,setpassword]= useState("")

const[Cpassword,setCpassword]= useState("")
  return (
    <div className='login'>
<img className='login-bg' src={backgound} alt="" />

<div className="sign-form">

  <div className='login-para'>
<p >Sign Up</p>
</div>
<label htmlFor="" className='name'>Name</label>
<input value={name}  onChange={(e)=>{setname(e.target.value)}} className='sign-name' placeholder='Enter your complete name' type="text" /> <br />
<label htmlFor="" className='mail'>Email</label>
<input value={email}  onChange={(e)=>{setEmail(e.target.value)}} className='login-email' placeholder='Enter your email' type="text" /> <br />
<label htmlFor="" className='password'>Password</label>
<input value={password}  onChange={(e)=>{setpassword(e.target.value)}} className='login-email' placeholder='Enter your password' type="text" /> <br />
<label htmlFor="" className='confirm-password'>Confirm Password</label>
<input value={Cpassword}  onChange={(e)=>{setCpassword(e.target.value)}} className='login-password' placeholder='Enter your password' type="text" /> <br />


<div className="login-btns">
<button className='cancel-login'>Cancel</button>

<button className='send-login'>Sign Up</button>
</div>

<div className="sign-bottom">
<p className='iamfirst'>Already have an account . Log In now.</p>

</div>

</div>

    </div>
  )
}

export default SignForm
