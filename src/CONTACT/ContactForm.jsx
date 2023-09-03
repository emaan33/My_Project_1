import React,{useState} from 'react'
import backgound from '../images/login-bg.png'
const ContactForm = () => {
    const[name,setname]= useState("")

const[email,setEmail]= useState("")

const[subject,setsubject]= useState("")

const[message,setmessage]= useState("")

  return (
  
    <div>
          <div className='login contact-index'>
<img className='contact-bg' src={backgound} alt="" />

<div className="sign-form">

  <div className='login-para'>
<p >Contact Us</p>
</div>
<label htmlFor="" className='name'>Name</label>
<input value={name}  onChange={(e)=>{setname(e.target.value)}} className='sign-name' placeholder='Enter your complete name' type="text" /> <br />
<label htmlFor="" className='mail'>Email</label>
<input value={email}  onChange={(e)=>{setEmail(e.target.value)}}  className='login-email' placeholder='Enter your email' type="text" /> <br />
<label htmlFor="" className='password'>Subject</label>
<input value={subject}  onChange={(e)=>{setsubject(e.target.value)}}  className='login-email' placeholder='Write a subject of your message' type="text" /> <br />
<label htmlFor="" className='confirm-password'>Message</label>
<textarea value={message}  onChange={(e)=>{setmessage(e.target.value)}} className='login-password' placeholder='Enter your message (max 500 words)' rows={5} type="text" ></textarea> <br />


<div className="contact-btn">

<button className='send-contact'>Send</button>
</div>

</div>
</div>
<div className="footer-contact">
        <p>All rights reserved @followerstudio.com</p>
      </div>
    </div>
  )
}

export default ContactForm
