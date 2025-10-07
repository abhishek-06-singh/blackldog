'use client'
import React, { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { getExperience } from '../../../../services/api'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

export default function ExperienceOption({ experience, onChange, errors }) {
  const [isOpen, setIsOpen] = useState(false)
  const [options, setOptions] = useState([])
  const [loading, setLoading] = useState(false)

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, color: '#000' }} spin />
  )

  useEffect(() => {
    const fetchExperience = async () => {
      setLoading(true)
      try {
        const res = await getExperience()
        if (res.success && Array.isArray(res.data)) {
          setOptions(res.data)
          onChange('experienceOptions', res.data)
        }
      } catch (error) {
        console.error('Failed to fetch experience:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchExperience()
  }, [])

  const handleSelect = (option) => {
    onChange('experience', option.id) // store ID
    setIsOpen(false)
  }

  const selectedLabel = options.find((o) => o.id === experience)?.name

  return (
    <div className="space-y-1 relative w-full">
      <label className="py-2 px-2 block text-sm font-medium text-textheading">
        Experience Level
      </label>

      <div
        className={`w-full px-4 pr-10 py-2 relative text-textplaceholder md:py-3 text-sm md:text-md border rounded-lg cursor-pointer ${
          errors.experience
            ? 'border-red-500 focus:ring-red-500'
            : 'border-bordercolor'
        }`}
        onClick={() => !loading && setIsOpen(!isOpen)}
      >
        {loading ? (
          <Spin indicator={antIcon} />
        ) : (
          selectedLabel || 'Select Your Experience Level'
        )}
        <ChevronDown className="absolute w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-textnormal flex-shrink-0 right-4 top-1/2 transform -translate-y-1/2" />
      </div>

      {isOpen && !loading && (
        <div className="absolute z-10 w-full mt-1 bg-cardbg border border-bordercolor rounded-lg shadow-lg">
          {options.map((option) => (
            <div
              key={option.id}
              className={`px-4 py-2 hover:bg-background hover:text-textheading cursor-pointer transition-colors text-textnormal ${
                selectedLabel === option.name ? 'bg-cardbg text-textheading' : ''
              }`}
              onClick={() => handleSelect(option)}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}

      {errors.experience && (
        <p className="text-red-500 text-sm mt-1">{errors.experience}</p>
      )}
    </div>
  )
}
