import React,{useState} from 'react'
import order from '../images/order.png'
import PassForm from '../Password/PassForm'
const ProfForm = () => {
    const[name,setname]= useState("")

    const[email,setEmail]= useState("")
    
    const[password,setpassword]= useState(true)
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
   <div className='editform'>
    {
      password===true?  <div>
      <div>


<div className="sign-form-prof">

 <div className='login-para-profile'>
<p >My Profile</p>
</div>
<div className="form-prof-parent">

<div className="prof-child">

<div className="prof-itself">
   <img 
   className='prof-img'
    src={order} alt="" />
</div>

<div className="prof-paraz">
   <p className='prof-para1'>Upload New Profile Photo</p>
   <p className='prof-para2'>Photo Fromat: jpeg , Png</p>
</div>
</div>

<div className="prof-btn">
<i class="upload-icon fa-solid fa-upload"></i>
<div className='prof-button'>
  <label htmlFor="photo">Upload Photo</label>
  <input className='input-file' type="file" name='photo' id='photo' />
</div>
</div>
</div>
<label htmlFor="" className='name'>Name</label>
<input value={name}  onChange={(e)=>{setname(e.target.value)}} className='sign-name-prof' placeholder='Livia Septimus' type="text" /> <br />
<label htmlFor="" className='mail'>Email</label>
<input value={email}  onChange={(e)=>{setEmail(e.target.value)}} className='login-email-prof' placeholder='LiviaSeptimus12@hotmail.com' type="text" /> <br />
<label htmlFor="" className='password'>Password</label>
<div className='login-email-prof'>
 <button onClick={()=>{setpassword(false)
 console.log(password);
}
} className="am-span-change">Change Password</button>
</div>



<div className="login-btns">
<button className='cancel-login'>Cancel</button>

<button onClick={handleLogin}>
  {
    validation===true? <button  className='send-login'>Save Changes</button> : <button  className='send-login'>Save Changes</button>
  }
</button>
</div>




   </div>
   </div>
   </div> : <PassForm />
    }
   </div>
  )
}

export default ProfForm
