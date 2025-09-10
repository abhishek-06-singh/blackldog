'use client'

import { useState } from 'react'
import { ConfigProvider, Steps } from 'antd'
import BasicDetailsStepOne from './BasicDetailsStepOne'
import LocationStepTwo from './LocationStepTwo'
import PropertyfeaturesStepThree from './PropertyFeaturesStepThree'
import MediaStepFour from './MediaStepFour'
export default function StepperForm() {
  const [current, setCurrent] = useState(0)

  const steps = [
    {
      title: 'Basic Details',
      content: <BasicDetailsStepOne onNext={() => setCurrent(current + 1)} />,
    },
    {
      title: 'Location',
      content: (
        <LocationStepTwo
          onNext={() => setCurrent(current + 1)}
          onBack={() => setCurrent(current - 1)}
        />
      ),
    },
    {
      title: 'Features',
      content: (
        <PropertyfeaturesStepThree
          onNext={() => setCurrent(current + 1)}
          onBack={() => setCurrent(current - 1)}
        />
      ),
    },
    {
      title: 'Media',
      content: (
        <MediaStepFour
          onBack={() => setCurrent(current - 1)}
          // onNext={() => setCurrent(current + 1)}
        />
      ),
    },
  ]

  return (
  <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#EEB887', // custom theme color
          borderRadius: 12,
        },
        components: {
          Steps: {
            colorPrimary: '#EEB887',
            colorText: '#000',
            colorTextActive: '#EEB887',
          },
        },
      }}
    >

      <div className="w-full flex flex-col items-center text-textnormal">
        {/* Stepper */}
        <Steps
          current={<span className='text-textnormal'>{current}</span>}
          onChange={() => {}} // disable clicking
          className="w-full p-2 md:p-6 mb-6 text-textnormal"
          items={steps.map((item) => ({
            title: <span className="text-sm text-textnormal font-medium">{item.title}</span>,
          }))}
        />

        {/* Dynamic Step Content */}
        <div className="w-full text-textnormal px-2 md:px-6">{steps[current].content}</div>
      </div>
    </ConfigProvider>
  )
}
