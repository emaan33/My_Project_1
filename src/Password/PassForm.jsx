import React,{useState} from 'react'
import backgound from '../images/login-bg.png'
import ProfForm from '../PROFILE/ProfForm'
const PassForm = () => {
  const[password,setpassword]= useState("")

const[Cpassword,setCpassword]= useState("")

const[cancel,setcancel] = useState(true)
const[showlogin,setshowlogin]= useState(true)

const[validation,setvalidation] = useState(true)



const validatePassword = (password) => {
  // Password should be at least 8 characters long
  return  password.length >= 8;
};

const validateCpassword =(Cpassword) =>{
  return Cpassword.length >=8
}

const handleLogin = () => {
  if (validatePassword(password)&& validateCpassword) {
    // Perform login logic here

setvalidation(false)
} else {
  // Handle invalid email or password
  alert('Password and Confirm Password should contain 8 letters');
}
};
  return (
  cancel===true?   <div className='login'>
  <img className='login-bg' src={backgound} alt="" />
  <div className="login-form-change">
  
    <div className='login-para-change'>
  <p >Change Password</p>
  </div>
  
  <label htmlFor="" className='mail'>Password</label>
  <input value={password}  onChange={(e)=>{setpassword(e.target.value)}} className='login-email' placeholder='**********' type="password" /> <br />
  <label htmlFor="" className='psswd'>Confirm Password</label>
  <input value={Cpassword}  onChange={(e)=>{setCpassword(e.target.value)}}  className='login-password' placeholder='*********' type="password" /> <br />
  
  
  <div className="login-btns-psswd">
  <button onClick={()=>(setcancel(false))} className='cancel-login'>Cancel</button>
  
 <button onClick={handleLogin}>
  {
    validation===true?  <a className='send-login'>Change Password</a>:  <a href='/editprofile' className='send-login'>Change Password</a>
  }
 </button>
  </div>

  </div>
  
      </div>:<ProfForm />
  )
}

export default PassForm
