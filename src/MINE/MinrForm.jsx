import React,{useState} from 'react'
import AmForm from '../AMOUNT/AmForm'

const MinrForm = () => {

const[icon,seticon]= useState(true)

const[reorder,setreorder]= useState(true)

    const time = new Date()
 const order= [ 
    {
        id: 1,
        sr:"01",
        dnt:  time.getTime(),
        platform: "Instagram",
        amount : "50$",

    },{
        id: 2,
        sr: "02",
        dnt: "12 JUN 2023 02:10 PM",
        platform: "Facebook",
        amount : "15$",

    },{
        id: 3,
        sr : "03",
        dnt: "12 JUN 2023 02:10 PM",
        platform: "tiktok",
        amount : "15$",
        
    },{
        id: 4,
        sr: "04",
        dnt: "12 JUN 2023 02:10 PM",
        platform: "snapchat",
        amount : "15$",

    },{
        id: 5,
        sr: "05",
        dnt: "12 JUN 2023 02:10 PM",
        platform: "linked-in",
        amount : "15$",

    }
 ]



  return (
  <div>
    {
reorder===true?  <div className='mine-parent'>
<div className="mine-form">

<div className="my-order">
<p className='mine-order-para'>My Orders</p>
</div>


<div className="lines-div">
<div className="grey-line">
    <p className='iamCounting-grey'>Sr #</p>
    <p className='iamTime-grey'>Date & Time </p>
    <p className='iamInsta-grey'>Platform</p>
    <p className='iamMoney-grey'>Amount</p>
    <p className='iamDays-grey'>Last 7 Days
    
   {
    icon===true?  <i onClick={()=>(seticon(false)) }  className="up-icon fa-solid fa-caret-left"></i>:<i onClick={()=>(seticon(true)) }  className="grey-icon fa-solid fa-caret-left"></i>
   }
    </p>
</div>

<div>
{
    order.map((user)=>(
        <div className="single-line" key={user.id}>
        <p className='iamCounting'>{user.sr}</p>
        <p  className='iamTime'>{user.dnt}</p>
        <p className='iamInsta'>{user.platform} </p>
        <p className='iamMoney'>{user.amount}</p>
        <a id='id-change' href="">View Details</a>
        <button onClick={()=>(setreorder(false))} className='reorder-btn'>Re Order</button>
    </div>
    ))
}
</div>

</div>
</div>
</div>: <AmForm />

    }
  </div>
  )
}

export default MinrForm
