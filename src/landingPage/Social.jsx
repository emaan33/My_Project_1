import React from 'react'
import instagram from '../images/002-instagram.png'
import facebook from '../images/001-facebook.png'
import spotify from '../images/013-spotify.png'
import linkedIn from '../images/005-linkedin.png'
import tiktok from '../images/008-tik tok.png'
import twitter from '../images/003-twitter.png'
import telegram from '../images/010-telegram.png'
const Social = () => {
  return (
    <div>
      <div className="social-area">

        <div className="pic-part">
<div className="side-tabs">
<div className='img-background instagram'><img src={instagram} alt="instagram" /></div>
<div className='img-background'><img src={facebook} alt="facebook" /></div>

</div>
<div className="center-tabs">

<div className='img-background'><img src={spotify} alt="spotify" /></div>
<div className='img-background'><img src={linkedIn} alt="linkedIn" /></div>
<div className='img-background'><img src={tiktok} alt="tiktok" /></div>
</div>
<div className="side-tabs">
<div className='img-background twitter'><img src={twitter} alt="twitter" /></div>
<div className='img-background'><img src={telegram} alt="telegram" /></div>
</div>
        </div>

        <div className="text-part">

<p className='first-para'>amazing features</p>
<p className='second-para'>Your Social Media Success Starts Here</p>
   <p className='third para'>We focus on one primary goal – helping you increase the number of followers on your social media platforms. Our tailored solutions elevate your social media presence across Facebook, Instagram, Twitter, Spotify, LinkedIn, Telegram, and TikTok. Experience a substantial boost in your follower count and expand your reach. Empower your social media journey with us, unlocking your true online potential. Let's grow together!</p>    

    </div>
      </div>
    </div>
  )
}

export default Social
