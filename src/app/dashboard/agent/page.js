'use client'

import React from 'react'
import Navbar from '../components/minicomponents/Navbar'
import Heading from '../components/minicomponents/Heading'
import StatCards from '../components/minicomponents/StatsCards'
import PropertyActivityOverview from '../components/minicomponents/PropertyActivityOverview'
import VisualAnalytics from '../components/minicomponents/VisualAnalytics'
import { motion } from 'framer-motion'
export default function AgentDashboard() {
  return (
    <motion.div
      className="mt-0 w-full flex flex-col overflow-x-hidden"
      initial={{ opacity: 0, y: 0 }} // start hidden + slightly down
      animate={{ opacity: 1, y: 0 }} // fade in + move up
      transition={{ duration: 0.6, ease: 'easeInOut' }} // 400ms
    >
      {/* Navbar */}
      <Navbar />

      <div className="lg:ml-10 md:ml-6 ml-2 mt-4">
        <Heading
          title="Welcome back, John"
          subtitle="Here's what's happening with your business today."
        />
      </div>
      <div className="lg:ml-10 md:ml-6 ml-2  mt-4">
        <StatCards />
      </div>
      <div className="lg:ml-10 md:ml-6 ml-2  mt-4">
        <PropertyActivityOverview />
      </div>
      <div className="lg:ml-10 md:ml-6 ml-2  mt-4">
        <VisualAnalytics />
      </div>
    </motion.div>
  )
}
