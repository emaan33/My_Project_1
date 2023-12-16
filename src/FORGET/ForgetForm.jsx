import React,{useState} from 'react'
import backgound from '../images/login-bg.png'
import LoginForm from '../LOGIN/LoginForm'
const ForgetForm = () => {


const[email,setEmail]= useState("")

const[showlogin,setshowlogin]= useState(true)
const[validation,setvalidation] = useState(true)

const validateEmail = (email) => {
  // Regular expression for validating an Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
const handleLogin = () => {
  if (validateEmail(email)) {
    // Perform login logic here

setvalidation(false)

  } else {
    // Handle invalid email or password
    alert('Email should be:abc@gmail.com');
  }
};
  return (
    <div>
      {
showlogin===true? <div className='login'>
<img className='login-bg' src={backgound} alt="" />
<div className="login-form">

  <div className='login-para-forget'>
<p >Forget Password</p>
</div>

<label htmlFor="" className='forget-mail'>Enter your Email to get a rest password link. </label>
<input value={email}  onChange={(e)=>{setEmail(e.target.value)}}  className='login-email' placeholder='Enter your email' type="text" /> <br />



<div className="login-btns">
<a href='/' className='cancel-login'>Cancel</a>

<button onClick={handleLogin}>
  {
    validation===true? <button   className='send-login'>Log In</button> :<button onClick={()=>(setshowlogin(false))}  className='send-login'>Log In</button> 
  }
</button>
</div>

</div>

    </div> : <LoginForm />

      }
    </div>
  )
}

export default ForgetForm
