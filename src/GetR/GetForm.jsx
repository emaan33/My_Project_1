import React, { useState } from 'react'
import BuyF from './BuyF'



const GetForm = () => {
  const[show,setshow] = useState(true)
  return (
   <div>
    {

      show===true?
 <div>
 
  <div className='get-parent'>
      {/* <p className='get-para1'>Get Ready to Rock Social Media!</p>
    
      <p className='get-para2'> Lorem ipsum dolor sit amet consectetur. Malesuada porttitor ac gravida consequat eleifend bibendum fusce. Purus cursus pretium elit nibh cursus consectetur amet nibh ut. Cursus lorem justo molestie enim aliquam id. Fringilla eget eu ut venenatis mus in nunc arcu aliquam. Elementum nisl elit neque elementum ultrices tempor tortor.  </p> */}
<p className='get-para1'>Get Ready to Rock Social Media!</p>
<p className='get-para2'>Lorem ipsum dolor sit amet consectetur. Malesuada porttitor ac gravida consequat eleifend bibendum fusce. Purus cursus pretium elit nibh cursus consectetur amet nibh ut. Cursus lorem justo molestie enim aliquam id. Fringilla eget eu ut venenatis mus in nunc arcu aliquam. Elementum nisl elit neque elementum ultrices tempor tortor. </p>
<div className='get-btn'>
<button onClick={()=>(setshow(false))} className='me' >Buy Followers</button>
</div>

</div>

 </div> 
: <BuyF />
    }
   </div>
  )
}

export default GetForm
