import React,{useState} from 'react'
import backgound from '../images/login-bg.png'
const PassForm = () => {
  const[password,setpassword]= useState("")

const[Cpassword,setCpassword]= useState("")
  return (
    <div className='login'>
    <img className='login-bg' src={backgound} alt="" />
    <div className="login-form">
    
      <div className='login-para'>
    <p >Change Password</p>
    </div>
    
    <label htmlFor="" className='mail'>Password</label>
    <input value={password}  onChange={(e)=>{setpassword(e.target.value)}} className='login-email' placeholder='**********' type="text" /> <br />
    <label htmlFor="" className='psswd'>Confirm Password</label>
    <input value={Cpassword}  onChange={(e)=>{setCpassword(e.target.value)}}  className='login-password' placeholder='*********' type="password" /> <br />
    
    
    <div className="login-btns">
    <button className='cancel-login'>Cancel</button>
    
    <button className='send-login'>Log In</button>
    </div>
  
    </div>
    
        </div>
  )
}

export default PassForm
