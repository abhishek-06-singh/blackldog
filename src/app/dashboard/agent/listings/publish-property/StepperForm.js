'use client'

import { useState } from 'react'
import { ConfigProvider, Steps } from 'antd'
import BasicDetailsStepOne from './BasicDetailsStepOne'
import LocationStepTwo from './LocationStepTwo'
import PropertyfeaturesStepThree from './PropertyFeaturesStepThree'
import MediaStepFour from './MediaStepFour'
import { theme } from 'antd'
import { useTheme } from 'next-themes'
export default function StepperForm() {
  const [current, setCurrent] = useState(0)
    const { theme: nextTheme } = useTheme();

  const isDark = nextTheme === 'dark';
  

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
           algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: '#EEB887 ', // active circle + line
          borderRadius: 12,
        },
        components: {
          Steps: {
            colorPrimary: '#EEB887',
            colorText: '#000', // default text
            colorTextActive: isDark ? '#fff' : '#000', // active text
            colorTextDescription: isDark ? '#fff' : '#000',
          },
        },
      }}
    >
      <div className="w-full flex flex-col items-center text-textnormal">
        {/* Stepper */}
        <Steps
          current={current} // ✅ must be number
          onChange={() => {}} // disable clicking
          className="w-full p-2 md:p-6 mb-6"
          items={steps.map((item) => ({
            title: (
              <span className="text-sm font-medium text-textnormal">
                {item.title}
              </span>
            ),
          }))}
        />

        {/* Dynamic Step Content */}
        <div className="w-full text-textnormal px-2 md:px-6">
          {steps[current].content}
        </div>
      </div>
    </ConfigProvider>
  )
}
