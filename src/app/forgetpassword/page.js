"use client"
import React, { useState } from 'react'
import BackToHomeLink from '../components/Shared/BackToHomeLink'
import SecurityNotice from '../components/Auth/SignIn/SecurityNotice'
import LeftPanel from '../components/Shared/LeftPanel'
import ForgetPasswordHeading from '../components/Auth/Forgetpassword/ForgetPasswordHeading'
import EmailInput from '../components/Auth/SignIn/EmailInput'
import ForgetPasswordButton from '../components/Auth/Forgetpassword/ForgetPasswordButton'
import {getForgetPassword} from '../../services/api'
 
export default function ForgetPassword () {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

   const handleClick = async () => {
    try {
      setLoading(true);
      const response = await getForgetPassword (email);
      console.log(response)
    } catch (error) {
      console.error('Forget Password API Error:', error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex w-full">
      <LeftPanel />
 
      <div className="relative lg:w-7/12 md:w-full w-full flex items-center justify-center p-8 bg-background">

        <div className="w-full max-w-lg space-y-8">
          {/* Link with fade-in from top */}
        
            <BackToHomeLink />
         
 
          {/* Sign-in Card with slide-up and fade-in */}
          <ForgetPasswordHeading />
          <EmailInput email={email} setEmail={setEmail} />
          <ForgetPasswordButton loading={loading} setLoading={setLoading} handleClick={handleClick} />
          {/* Security Notice - slow fade */}
         
            <SecurityNotice />
         
        </div>
      </div>
    </div>
  )
}