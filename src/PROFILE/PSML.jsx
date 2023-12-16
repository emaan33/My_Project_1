import React,{useState} from 'react'
import logo from '../images/Logo.png'
import order from '../images/order.png'
import OrderSN from '../ORDER/OrderSN'
import Little from '../GetR/Little'
const PSML = () => {
    const[show,setshow] = useState(true)
    const[nav,setnav] = useState(true)
  return (
    <div className='smoll'>
    <div className='logo-icon-home'>
  <div className="logo-small">
   <img src={logo} alt="logo" />
   </div>
   <div onClick={()=>{nav===true? setnav(false):setnav(true)}} className='smoll-icon'>
   <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
   </div>
   
   </div>

{
   nav===true?   
  
        "":   <div className='right-home'>
       <div className='home-parent'>
        <div className='home-contact'>  <a  href="">Contact</a> </div>
           
           <div className='home-img' onClick={()=>(show===true? setshow(false):  setshow(true))}>
           <img src={order} alt="" />
           </div>
           {
             show===true? "" 
             : 
             
             <Little />
           }
            <div className='smoll-btn'>
          <button className='me' >Buy Followers</button>
      </div>
       </div>   
           </div>
}




</div>
  )
}

export default PSML
