'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Clock } from 'lucide-react'
import MonthlyDashboard from '../components/MonthlyDashboard'
import AnuallyDashboard from '../components/AnuallyDashboard'
import Navbar from '../../../components/minicomponents/Navbar'

export default function UpgradeChangePlan() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  const [active, setActive] = useState('Monthly')
  const [selectedCard, setSelectedCard] = useState(null)
  const [showModal, setShowModal] = useState(false)

  return (
    <motion.div
      className="mt-0 w-full flex flex-col overflow-x-hidden"
      initial={{ opacity: 0, y: 0 }} // start hidden + slightly down
      animate={{ opacity: 1, y: 0 }} // fade in + move up
      transition={{ duration: 0.6, ease: 'easeInOut' }} // 400ms
    >
      <Navbar />
      <div className="px-4 lg:px-4 py-5">
        {/* Banner */}
        <div className="flex items-center gap-2  p-3 border border-secondary bg-coral  rounded-md text-sm">
          <div className="flex items-center gap-0.5">
            <Clock className="text-red-500 w-5 h-5" />
            <span className="text-red-500">Free trial ended</span>
          </div>

          <span className="text-textnormal font-medium">
            - Choose a plan to continue using all features
          </span>
        </div>

        {/* Heading with ref attached */}
        <motion.h1
          ref={ref}
          className="font-glancyr texy-primary mt-8 text-2xl md:text-3xl font-bold text-textheading text-center md:mx-10 lg:mx-24"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Choose the plan that fits your business
        </motion.h1>

        <motion.p
          className="text-textnormal text-xs md:text-lg text-center md:18 lg:mx-32"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Keep using all features by subscribing today.
        </motion.p>

        <div className="w-fit mx-auto my-10">
          <div className="bg-background shadow-md border border-bordercolor rounded-full flex items-center px-1 py-1">
            {/* Monthly Button */}
            <button
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition ${
                active === 'Monthly'
                  ? 'bg-buttonbg text-background'
                  : 'text-primary hover:text-primary'
              }`}
              onClick={() => setActive('Monthly')}
            >
              Monthly
            </button>

            {/* Annual Button */}
            <button
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition flex items-center space-x-1 ${
                active === 'Anually'
                  ? 'bg-buttonbg text-background'
                  : 'text-primary hover:text-primary'
              }`}
              onClick={() => setActive('Anually')}
            >
              <span>Annual</span>
              <span className="ml-1 text-xs text-orange-500 border border-orange-200 bg-orange-50 px-2 py-0.5 rounded-full">
                -15%
              </span>
            </button>
          </div>
        </div>

        {/* Content Switch */}
        <div className="max-w-7xl mx-auto">
          {active === 'Monthly' && (
            <MonthlyDashboard
              showModal={showModal}
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
            />
          )}
          {active === 'Anually' && (
            <AnuallyDashboard
              showModal={showModal}
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
            />
          )}
        </div>
      </div>
    </motion.div>
  )
}
