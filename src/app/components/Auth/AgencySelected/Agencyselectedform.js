'use client'
import React, { useState } from 'react'
import BackContinue from '../Shared_AuthComponents/BackContinue'
import Progressbar from '../Shared_AuthComponents/Progressbar'
import RadioButton from '../../utilis/RadioButton'
import SetupHeading from '../Shared_AuthComponents/SignupSetupHeading'
import Agencyaccountinfo from './Agencyaccountinfo'
import agent from '../../../images/agent.svg'
import building from '../../../images/Frame.svg'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { registerUser } from '../../../../services/api'
import { Spin } from 'antd'
import { useRouter } from 'next/navigation'
export default function AgencySelectedForm() {
  const router = useRouter()
  const [selectedOption, setSelectedOption] = useState('agent')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'AGENT',
    specialties: [],
    experience: '',
    experienceOptions: [],
    agreedToTerms: false,
    countryCode: '+91',
    phoneNumber: '',
  })
  const [formErrors, setFormErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const options = [
    {
      value: 'agent',
      title: 'Individual Real Estate Agent',
      description: 'Independent agent or working under a brokerage',
      name: 'accountType',
      icon: agent,
    },
    {
      value: 'broker',
      title: 'Real Estate Brokerage/Agency',
      description: 'Company or agency managing multiple agents',
      name: 'accountType',
      icon: building,
    },
  ]

  const handleOptionChange = (value) => {
    setSelectedOption(value)
    setFormData((prev) => ({
      ...prev,
      role: value === 'agent' ? 'AGENT' : 'AGENCY',
    }))
  }

  const handleInputChange = (field, value) => {
    // Update form data
    setFormData((prev) => ({ ...prev, [field]: value }))

    // Clear the error for this field if it exists
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = () => {
    const errors = {}

    // Helper regex
    const nameRegex = /^[A-Za-z'-]{1,30}$/ // allows letters, apostrophe, hyphen, max 30 chars
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/ // strong password
    const phoneRegex = /^[0-9]{10,15}$/ // digits only, 10–15 length

    // First Name
    if (!formData.firstName?.trim()) {
      errors.firstName = 'First Name is required'
    } else if (!nameRegex.test(formData.firstName)) {
      errors.firstName =
        'First Name must be letters only (hyphen/apostrophe allowed, max 30 chars)'
    }

    // Last Name
    if (!formData.lastName?.trim()) {
      errors.lastName = 'Last Name is required'
    } else if (!nameRegex.test(formData.lastName)) {
      errors.lastName =
        'Last Name must be letters only (hyphen/apostrophe allowed, max 30 chars)'
    }

    // Email
    if (!formData.email?.trim()) {
      errors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }

    // Password
    if (!formData.password) {
      errors.password = 'Password is required'
    } else if (!passwordRegex.test(formData.password)) {
      errors.password =
        'Password must be at least 8 characters, include uppercase, lowercase, number & special character'
    }

    // Phone Number
    if (!formData.phoneNumber?.trim()) {
      errors.phoneNumber = 'Phone Number is required'
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Phone Number must be 10-15 digits only'
    }

    // Experience
   if (!formData.experience) {
  errors.experience = 'Please select your experience level'
} else if (
  !formData.experienceOptions.some(
    (opt) => String(opt.id) === String(formData.experience)
  )
) {
  errors.experience = 'Invalid experience level selected'
}


    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleContinue = async () => {
    if (!validateForm()) return

    setLoading(true)
    const toastId = toast.loading('Submitting your account...') // Sonner loading toast

    try {
      const data = await registerUser(formData)

      // ✅ Save everything to localStorage
      if (data?.data) {
        const { accessToken, user, emailStatus, message } = data.data

        if (accessToken) {
          localStorage.setItem('accessToken', accessToken)
        }

        if (user) {
          localStorage.setItem('user', JSON.stringify(user))

          // ✅ Navigate based on role
          if (user.role === 'AGENCY') {
            router.push('/agencydocs')
          } else {
            router.push('/agentdocs')
          }
        }

        if (emailStatus) {
          localStorage.setItem('emailStatus', emailStatus)
        }

        if (message) {
          localStorage.setItem('registrationMessage', message)
        }
      }

      toast.success('Account created successfully!', { id: toastId })
      console.log('Form submitted:', data)
    } catch (error) {
      const apiMessage = error.response?.data?.message
      const fieldErrors = {}

      if (Array.isArray(apiMessage)) {
        toast.error(apiMessage.join(' | '), { id: toastId })

        apiMessage.forEach((msg) => {
          if (msg.toLowerCase().includes('expertise'))
            fieldErrors.specialties = msg
          if (msg.toLowerCase().includes('experience'))
            fieldErrors.experience = msg
          if (msg.toLowerCase().includes('phone')) fieldErrors.phoneNumber = msg
          if (msg.toLowerCase().includes('email')) fieldErrors.email = msg
        })
      } else if (typeof apiMessage === 'string') {
        toast.error(apiMessage, { id: toastId })

        if (apiMessage.toLowerCase().includes('expertise'))
          fieldErrors.specialties = apiMessage
        if (apiMessage.toLowerCase().includes('experience'))
          fieldErrors.experience = apiMessage
        if (apiMessage.toLowerCase().includes('phone'))
          fieldErrors.phoneNumber = apiMessage
        if (apiMessage.toLowerCase().includes('email'))
          fieldErrors.email = apiMessage
      } else {
        toast.error('Something went wrong. Please try again.', { id: toastId })
      }

      setFormErrors(fieldErrors)
      console.error('Register API Error:', error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <motion.div
      className="flex-1 flex flex-col justify-center"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Full-screen loader */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <Spin size="large" style={{ color: 'white' }} />
        </div>
      )}

      <div className="max-w-4xl mx-auto my-10 p-1 md:p-2 lg:p-6">
        <Progressbar no={1} progress={33.33} desc={'Account Creation'} />
        <div className="w-full flex items-center my-10 p-6 bg-cardbg border justify-center rounded-xl">
          <div className="w-full flex flex-col">
            <SetupHeading
              title={'Create Your Account'}
              desc={
                'Join thousands of real estate professionals growing their business'
              }
            />

            {/* Account Type */}
            <div className="w-full flex flex-col gap-2 items-start">
              <p className="text-textnormal text-[18px]">I am:</p>
              {options.map((option) => (
                <div
                  key={option.value}
                  className="w-full rounded-lg border p-2 md:p-4 lg:p-4"
                >
                  <RadioButton
                    {...option}
                    checked={selectedOption === option.value}
                    onChange={() => handleOptionChange(option.value)}
                  />
                </div>
              ))}
            </div>

            {/* Account Info Form */}
            <Agencyaccountinfo
              formData={formData}
              onInputChange={handleInputChange}
              formErrors={formErrors}
              setFormErrors={setFormErrors}
            />

            {/* Continue / Back Buttons */}
            <BackContinue
              back_link={'/signin'}
              Continue_link={null}
              onContinue={handleContinue}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
