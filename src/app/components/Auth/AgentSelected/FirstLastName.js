'use client'
import React from 'react'

export default function FirstLastName({
  firstName,
  lastName,
  onChange,
  errors,
}) {
  return (
    <div className="w-full flex gap-3">
      {/* First Name */}
      <div className="w-1/2 flex flex-col">
        <label className="py-2 px-2 text-textnormal text-sm">First Name*</label>
        <input
          type="text"
          id="firstname"
          placeholder="Enter Your First Name"
          value={firstName}
          onChange={(e) => onChange('firstName', e.target.value)}
          className={`w-full px-4 pr-10 py-2 md:py-3 text-textnormal text-sm md:text-lg border rounded-lg outline-none transition-all duration-200 ${
            errors.firstName
              ? 'border-red-500 focus:ring-red-500'
              : 'border-bordercolor focus:ring-primary'
          }`}
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
        )}
      </div>

      {/* Last Name */}
      <div className="w-1/2 flex flex-col">
        <label className="py-2 px-2 text-textnormal text-sm">Last Name*</label>
        <input
          type="text"
          id="lastname"
          placeholder="Enter Your Last Name"
          value={lastName}
          onChange={(e) => onChange('lastName', e.target.value)}
          className={`w-full px-4 pr-10 py-2 md:py-3 text-sm  text-textnormal md:text-lg border rounded-lg outline-none transition-all duration-200 ${
            errors.lastName
              ? 'border-red-500 focus:ring-red-500'
              : 'border-bordercolor focus:ring-primary'
          }`}
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
        )}
      </div>
    </div>
  )
}
