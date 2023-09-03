import React, { useState } from 'react'
import background from '../images/Rectangle 26.png'
const Form = () => {

const[name,setname]= useState("")

const[email,setEmail]= useState("")

const[message,setmessage]= useState("")




  return (
    <div>
       
   <div className='formbackground-img'>

    <div className="form-text">
<p className='form-para1'>Get started with us</p>
<p className='form-para2'>Don't bother to get started us, we are ready to help you 24/7. Please fill in the column on the right to get started</p>
    </div>


    <div className="form">

    <p>Ask a Question</p>
    <label htmlFor=""></label>
    <input value={name}  onChange={(e)=>{setname(e.target.value)}} className='first-input' placeholder='Full Name' type="text" /> <br />
    <label htmlFor=""></label>
    <input value={email}  onChange={(e)=>{setEmail(e.target.value)}} className='first-input' placeholder='Email' type="text" /> <br />
    <label htmlFor=""></label>
    <textarea value={message}  onChange={(e)=>{setmessage(e.target.value)}}  className='message-input' placeholder='Your message (Max 250 words)' rows="5" type="text"></textarea> <br />
   <div className='btn-div'><button className='form-btn'>Send</button></div>

    </div>
</div> 

      </div>
  )
}

export default Form
