'use client'
import React, { useState } from 'react'
import ActivePlan_Module from './ActivePlan_Module'
import { useInView } from 'react-intersection-observer'
import Middlebar from './Middlebar'
import TrialBar from './TrialBar'

export default function Pricing_Modal({onPlanSelect}) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false, 
  })

  return (
    <div>
      <div
        className=" py-4 bg-gradient-to-t from-orange-400 to-background rounded-2xl  px-2 sm:px-4 lg:px-6 "
        ref={ref}
      >
        <TrialBar />
        <div className="w-full  mx-auto text-center">
          <Middlebar inView={inView} />
          <ActivePlan_Module
            onPlanSelect={onPlanSelect}
          />
        </div>
      </div>
    </div>
  )
}
