import React,{useState} from 'react'
import backgound from '../images/login-bg.png'
import LoginForm from '../LOGIN/LoginForm'
const SignForm = () => {
  const[name,setname]= useState("")

const[email,setEmail]= useState("")

const[password,setpassword]= useState("")

const[Cpassword,setCpassword]= useState("")

const[showlogin,setshowlogin]= useState(true)

const[validation,setvalidation] = useState(true)

const validateEmail = (email) => {
  // Regular expression for validating an Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  // Password should be at least 8 characters long
  return  password.length >= 8;
};

const validateCpassword =(Cpassword) =>{
  return Cpassword.length >=8
}

const handleLogin = () => {
  if (validateEmail(email) && validatePassword(password)&& validateCpassword) {
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
      showlogin===true? 
        <div>
      <div className='signup'>
  
  
  <div className="sign-form">
  
    <div className='login-para-signup'>
  <p >Sign Up</p>
  </div>
  <label htmlFor="" className='name'>Name</label>
  <input value={name} type="text"  onChange={(e)=>{setname(e.target.value)}} className='sign-name' placeholder='Enter your complete name' /> <br />
  <label htmlFor="" className='mail'>Email</label>
  <input value={email} type="email" onChange={(e)=>{setEmail(e.target.value)}} className='login-email' placeholder='Enter your email'  /> <br />
  <label htmlFor=""  className='password'>Password</label>
  <input value={password} type="password" onChange={(e)=>{setpassword(e.target.value)}} className='login-email' placeholder='Enter your password'  /> <br />
  <label htmlFor="" className='confirm-password'>Confirm Password</label>
  <input value={Cpassword} type="password" onChange={(e)=>{setCpassword(e.target.value)}} className='login-password' placeholder='Enter your password' /> <br />
  
  
  <div className="login-btns">
  <a href='/' className='cancel-login'>Cancel</a>
  {
    name!=""&& email!=""&& password!=""&& Cpassword!="" ?
     <button onClick={handleLogin}>
      
  {
    validation===true? <button className='send-login'>Sign Up</button>:<button onClick={()=>(setshowlogin(false))} className='send-login'>Sign Up</button>
  }
       </button>: ""
  }
 
  </div>
  
  <div className="sign-bottom">
  <p className='iamfirst'>Already have an account . <span  onClick={()=>(setshowlogin(false))} className='span-sign' > Log In</span> now.</p>
  
  </div>
  
  </div>
      </div>
     
      </div>
      
      :
      <LoginForm />
    }
  </div>
  )
}

export default SignForm
