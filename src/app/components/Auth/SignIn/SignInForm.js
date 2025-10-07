'use client'
import React,{useState} from 'react'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'
import RememberMeCheckbox from './RememberMeCheckbox'
import { motion } from "framer-motion"
import { LoginUser } from '../../../../services/api'
import { useRouter } from 'next/navigation'
import { useAuth } from '../../../../../context/AuthContext'

export default function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
   const [showPassword, setShowPassword] = useState(false)
   const [rememberMe, setRememberMe] = useState(false)
   const[loading,setLoading] = useState(false)
   const router = useRouter()

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await LoginUser({ email, password });

      // ✅ set user in context instead of localStorage
      login(response.data);

      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
     <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
    <form
      onSubmit={handleSubmit}
      className="space-y-2 sm:space-y-4 lg:space-y-6"
    >
      <EmailInput email={email} setEmail={setEmail} />
      <PasswordInput password={password} setPassword={setPassword} showPassword={showPassword} setShowPassword={setShowPassword} />
      <RememberMeCheckbox rememberMe={rememberMe} setRememberMe={setRememberMe} />
      <button
        type="submit"
        className="w-full bg-buttonbg text-white py-3 px-4 rounded-lg hover:bg-opacity-90 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 font-medium"
      >
        Sign in {loading && <span className="animate-spin">...</span>}
      </button>
    </form></motion.div>
  )
}
