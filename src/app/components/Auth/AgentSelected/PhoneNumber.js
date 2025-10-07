'use client'
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import PhoneInput (no SSR)
const PhoneInput = dynamic(() => import('react-phone-input-2'), { ssr: false })

export default function PhoneNumber({
  phoneNumber,
  countryCode,
  onChange,
  errors,
}) {
  useEffect(() => {
    // Load CSS only on client
    import('react-phone-input-2/lib/style.css')
  }, [])

  return (
    <div className="space-y-2 w-full">
      <label htmlFor="phone-number" className="text-sm text-textheading">
        Phone Number*
      </label>
      <PhoneInput
        country={'us'}
        value={phoneNumber}
        onChange={(value) => onChange('phoneNumber', value)}
        inputProps={{
          name: 'phone',
          required: true,
        }}
        inputClass={`!w-full !py-[10px] !pl-14 bg-background !pr-4 !text-sm !text-black !border !rounded-xl !placeholder-gray-400 ${
          errors.phoneNumber
            ? '!border-red-500 !focus:ring-red-500'
            : '!border-bordercolor !focus:ring-primary'
        }`}
        containerClass="!w-full"
        buttonClass="!border-r !border-gray-300 !bg-background"
        dropdownClass="!text-black"
      />
      {errors.phoneNumber && (
        <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
      )}
    </div>
  )
}
