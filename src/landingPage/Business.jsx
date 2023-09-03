import React from 'react'
import firstPic from '../images/Ellipse 146.png'
import secondPic from '../images/Ellipse 147.png'
import thirdPic from '../images/Rectangle 70.png'

const Business = () => {
  return (
    <div>
      <div className="business-part">
        <div className="text-portion">
<p className='business-para1'>Take your business <br /> to the <span className='next-span'>next level!</span></p>
<p className='business-para2'>Lorem ipsum dolor sit amet consectetur. Tellus purus quam ac odio ultricies pretium hendrerit sed amet. Ultricies egestas id aliquam facilisi id semper pharetra. </p>
<button className='business-btn'>Grow Your Audience</button>
        </div>


        <div className="divs">


<div className="text-divs">
<img  src={firstPic} alt="first" />
<p className='div-para'>Today i need to have extra time
after work to analyze all comapnys
reports again.I`m tired.</p>
</div>


<div className="move-away">
    <img  src={secondPic} alt="second" />
    <p className='div-para '>Oh! shoot ! listen, try Reflectowl,
I`m sure that you`ll forget about
this problam at all.</p>
</div>



<div className="text-divs">
    <img  src={thirdPic} alt="third" />
    <p className='div-para'>OMG ! thanks why i have try. I`m
sure that you`ll forget about this
problam at all.</p>
</div>



     </div>
      </div>
    </div>
  )
}

export default Business
