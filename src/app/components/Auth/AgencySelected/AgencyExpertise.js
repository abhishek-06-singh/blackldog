'use client'
import React, { useEffect, useState } from 'react'
import Checkbox from '../../utilis/Checkbox'
import { getExpertise } from '../../../../services/api'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

export default function Expertise({ specialties, onChange, errors }) {
  const [expertiseOptions, setExpertiseOptions] = useState([])
  const [loading, setLoading] = useState(false)

  // Custom black loader
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 32, color: '#000' }} spin />
  )

  // Fetch expertise options from API
  useEffect(() => {
    const fetchExpertise = async () => {
      setLoading(true)
      try {
        const res = await getExpertise()
        if (res.success && Array.isArray(res.data)) {
          setExpertiseOptions(res.data)
        }
      } catch (error) {
        console.error('Failed to fetch expertise:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchExpertise()
  }, [])

  const handleCheckBox = (id) => {
    if (specialties.includes(id)) {
      onChange(
        'specialties',
        specialties.filter((item) => item !== id)
      )
    } else {
      onChange('specialties', [...specialties, id])
    }
  }

  return (
    <div className="w-full">
      <h2 className="text-textheading text-md md:text-lg mb-6">
        Your Expertise
      </h2>
      <p className="text-xs md:text-sm text-textcheckbox mb-4">
        Area of Expertise (Select all that apply)
      </p>

      {loading ? (
        <div className="flex justify-center py-6">
          <Spin indicator={antIcon} />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-y-3 gap-x-3 text-xs md:text-sm text-textcheckbox">
          {expertiseOptions.map((option) => (
            <Checkbox
              key={option.id}
              id={`expertise-${option.id}`}
              checked={specialties.includes(option.id)}
              onChange={() => handleCheckBox(option.id)}
              label={option.name}
            />
          ))}
        </div>
      )}
    </div>
  )
}
