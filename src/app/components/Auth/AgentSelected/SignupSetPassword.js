'use client'
import React, { useEffect, useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

export default function SignsetupPassword({ password, onChange, errors }) {
  const [showPassword, setShowPassword] = useState(false)
  const [strength, setStrength] = useState(0)

  const checkPasswordStrength = (pwd) => {
    let score = 0
    if (pwd.length >= 6) score++
    if (/[0-9]/.test(pwd)) score++
    if (/[!@#$%^&*]/.test(pwd)) score++
    if (/[A-Z]/.test(pwd)) score++
    return score
  }

  const getStrengthLabel = () => {
    switch (strength) {
      case 0:
      case 1:
        return 'Weak'
      case 2:
        return 'Medium'
      case 3:
        return 'Strong'
      case 4:
        return 'Excellent'
      default:
        return ''
    }
  }

  const getBarColor = () => {
    switch (strength) {
      case 0:
      case 1:
        return 'bg-red-500'
      case 2:
        return 'bg-yellow-400'
      case 3:
        return 'bg-blue-500'
      case 4:
        return 'bg-green-500'
      default:
        return 'bg-gray-300'
    }
  }

  useEffect(() => {
    setStrength(checkPasswordStrength(password))
  }, [password])

  return (
    <div className="space-y-2 w-full">
      <label
        htmlFor="password"
        className="text-sm font-medium text-textheading"
      >
        Password*
      </label>
      <div className="relative">
        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => onChange('password', e.target.value)}
          className={`w-full px-4 pr-10 py-2 md:py-3 text-sm md:text-lg border rounded-lg outline-none transition-all duration-200 ${
            errors.password
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:ring-primary'
          } text-gray-900 placeholder-textplaceholder`}
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          {showPassword ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Password Strength Bar */}
      <div className="flex space-x-2 mt-2">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={`h-1 flex-1 rounded transition-all duration-300 ${
              strength > index ? getBarColor() : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="mt-1.5 text-xs md:text-sm text-textheading">
        Password strength: <strong>{getStrengthLabel()}</strong>
      </p>

      {/* Error message */}
      {errors.password && (
        <p className="text-red-500 text-sm mt-1">{errors.password}</p>
      )}
    </div>
  )
}
