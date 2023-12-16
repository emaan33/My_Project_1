import React, { useState } from 'react'

import logo from '../images/Logo.png'
const SMAALnav = () => {

const[smoll,setsmoll] =useState(true)
console.log(smoll);
  return (
    <div className='smoll'>
     <div className='logo-icon'>
     <div className="logo-small">
        <img src={logo} alt="logo" />
    </div>
<div onClick={()=>{smoll===true?setsmoll(false):setsmoll(true)}} className='smoll-icon'>
<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
</div>
     </div> 
{
  smoll===true? 
  
   "": <div className='smoll-right'>

   <div className='smoll-contact'> <a className='link-contact' href="">Contact</a> </div>
   
   
    <div className='smoll-log'> <a href="/login">Log In</a></div>
   
    
   <div className='smoll-btn'>
       <a href='/homepage' className='me' >Buy Followers</a>
   </div>
   </div>
}
<div>

</div>



    </div>
  )
}

export default SMAALnav
