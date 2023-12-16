import React from 'react';
import LoginNav from './LoginNav';
import LoginForm from './LoginForm';
import Footer from '../landingPage/Footer';
import '../App.css';
import SmLOgin from './SmLOgin';
const Login = () => {
  return (
    <div className='sign-up-bg'>
      <LoginNav />
      <SmLOgin />
     <LoginForm />
     <Footer />
    </div>
  )
}

export default Login
