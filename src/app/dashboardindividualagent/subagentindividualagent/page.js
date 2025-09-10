'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/minicomponents/Navbar'
import Heading from '../components/minicomponents/Heading'
import StatCards from '../components/minicomponents/StatsCards'
import RecentTable from '../components/minicomponents/RecentTable'
import ParentAgent from '../components/minicomponents/ParentAgent'

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

      <div className="ml-5 lg:ml-10 mt-4">
        <Heading
          title="Welcome back, John"
          subtitle="Here's what's happening with your business today."
        />
      </div>

      <div className="ml-5 lg:ml-10 mt-4">
        <StatCards />
      </div>

      <div className="ml-5 lg:ml-10 mt-4">
        <RecentTable />
      </div>

      <div className="mr-5 ml-5 lg:ml-10 lg:mr-10 mt-4">
        <ParentAgent />
      </div>
    </motion.div>
  )
}
