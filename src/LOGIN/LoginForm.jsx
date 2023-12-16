import React,{useState} from 'react'
import backgound from '../images/login-bg.png'
import SignForm from '../SIGN UP/SignForm'
import ForgetForm from '../FORGET/ForgetForm'
const LoginForm = () => {

const[email,setEmail]= useState("")

const[password,setpassword]= useState("")

const[cancel,setcancel]= useState(true)
const[forget,setforget] = useState(true)
const[validation,setvalidation] = useState(true)

const validateEmail = (email) => {
  // Regular expression for validating an Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  // Password should be at least 8 characters long
  return password.length >= 8;
};
const handleLogin = () => {
  if (validateEmail(email) && validatePassword(password)) {
    // Perform login logic here

setvalidation(false)

  } else {
    // Handle invalid email or password
    alert('Password should contain 8 letters and email should be:abc@gmail.com');
  }
};
  return (
 <div>
  {
    cancel===true?    
    <div>
    {
      forget===true?  

      <div className='login'>
        <div className="whole-login">
   <div className='login-para'>
      <p >Log In</p>
      </div>
      <div className="login-form"> 
      <label htmlFor="" className='mail'>Email</label>
      <input value={email}  onChange={(e)=>{setEmail(e.target.value)}}  className='login-email' placeholder='Enter your email' type='email'  required /> <br />
      <label htmlFor="" className='psswd'>Password</label>
      <input value={password}  onChange={(e)=>{setpassword(e.target.value)}}  className='login-password' placeholder='Enter your password' type="password" minlength="8" maxlength="16"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"  required/> <br />
      <div className="login-btns">
      <button onClick={()=>(setcancel(false))} className='cancel-login'>Cancel</button>
  
    {
  email!=""&& password!=""?  <button onClick={ handleLogin}>
   {
    validation===true?  <a  className='send-login' href='#'>Log In</a> :  <a  className='send-login' href='/homepage'>Log In</a> 
   }
    </button>  : "" 
    }
{/* minlength="6" maxlength="16" required
minlength="8" maxlength="16"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"  required */}
 
      </div>
      
      <div className="bottom-text">
      <p className='iamfirst'>Don’t have any account. <span onClick={()=>(setcancel(false))} className='span-sign' >Sign up </span> now.</p>
      <p onClick={()=>(setforget(false))} className='iamsecond'>Forget Password?</p>
      </div>   
      
      </div>
      </div>
          </div>: 
          <ForgetForm />
    }
    </div>
        
         :<SignForm /> 
  }
 </div>
  )
}

export default LoginForm
