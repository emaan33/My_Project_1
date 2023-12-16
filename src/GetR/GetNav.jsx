import React,{useState} from 'react'
import logo from '../images/Logo.png'
import order from '../images/order.png'
import OrderSN from '../ORDER/OrderSN'
import Little from './Little'

const GetNav = () => {
  const[show,setshow] = useState(true)
  return (
    <div>
                <div className="navbar">

<div className="logo">
    <img src={logo} alt="logo" />
</div>

<div className='right'>
<div className="order-links">
    <a  href="">Contact</a>
    
    <div onClick={()=>(show===true? setshow(false):  setshow(true))}>
    <img src={order} alt="" />
    </div>
    {
      show===true?  "":<Little />
    }
</div>
</div>
</div>
    </div>
  )
}

export default GetNav
