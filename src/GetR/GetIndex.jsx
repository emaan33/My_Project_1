import React from 'react'
import GetNav from './GetNav'
import GetForm from './GetForm'
import BuyF from './BuyF'
import Footer from '../landingPage/Footer'
import HomeSM from './HomeSM'
const GetIndex = () => {
  return (
    <div>
      <GetNav />
      <HomeSM />
      <GetForm />
      {/* <BuyF /> */}
      <Footer />
    </div>
  )
}

export default GetIndex
