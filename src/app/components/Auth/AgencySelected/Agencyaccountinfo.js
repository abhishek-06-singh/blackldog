'use client'
import React, { useState } from 'react'
import Emailverify from '../AgentSelected/Emailverify'
import FirstLastName from '../AgentSelected/FirstLastName'
import Checkbox from '../../utilis/Checkbox'
import SignsetupPassword from '../AgentSelected/SignupSetPassword'
import ExperienceOption from './Experienceoptions'
import Expertise from './AgencyExpertise'
import PhoneNumber from '../AgentSelected/PhoneNumber'

export default function Agencyaccountinfo({
  formData,
  onInputChange,
  formErrors,
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="space-y-6 mt-6">
      <p className="text-xl text-textheading">Account Information</p>

      <FirstLastName
        firstName={formData.firstName}
        lastName={formData.lastName}
        onChange={onInputChange}
        errors={formErrors}
      />
      <PhoneNumber
        phoneNumber={formData.phoneNumber}
        countryCode={formData.countryCode}
        onChange={onInputChange}
        errors={formErrors}
      />
      <Emailverify
        email={formData.email}
        onChange={onInputChange}
        errors={formErrors}
      />
      <SignsetupPassword
        password={formData.password}
        onChange={onInputChange}
        errors={formErrors}
      />
      <Expertise
        specialties={formData.specialties}
        onChange={onInputChange}
        errors={formErrors}
      />
      <ExperienceOption
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        experience={formData.experience}
        onChange={onInputChange}
        errors={formErrors}
      />

      <Checkbox
        id="agree"
        checked={formData.agreedToTerms}
        label="I agree to the Terms & Conditions and Privacy Policy*"
        onChange={(e) => onInputChange('agreedToTerms', e.target.checked)}
      />
    </div>
  )
}
