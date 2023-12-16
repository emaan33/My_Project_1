import React from 'react'
import ProfForm from './ProfForm'
import ProfNav from './ProfNav'
import Footer from '../landingPage/Footer'
import PSML from './PSML'
const ProfIndex = () => {
  return (
    <div>
      <ProfNav />
      <PSML />
      <ProfForm />
      <Footer />
    </div>
  )
}

export default ProfIndex
