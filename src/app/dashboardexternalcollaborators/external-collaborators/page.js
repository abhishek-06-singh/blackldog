'use client'
import React from 'react'
import Navbar from '../components/minicomponents/Navbar'
import Heading from '../components/minicomponents/Heading'
import StatCards from '../components/minicomponents/StatsCards'
import PropertyActivityOverview from '../components/minicomponents/PropertyActivityOverview'
import VisualAnalytics from '../components/minicomponents/VisualAnalytics'
import RecentTable from '../components/minicomponents/RecentTable'
import ParentAgent from '../components/minicomponents/ParentAgent'
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

      <div className="">
        <div className="ml-5 md:ml-10 my-6 h-10 flex pr-5 md:pr-10 justify-between">
        <Heading
          title="Welcome back, John"
          subtitle="Here's what's happening with your business today."
        />
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-1 px-3 rounded-xl bg-shadow '>
            <span className='w-1.5 h-1.5 rounded-full bg-textnormal'></span>
            <p className="text-textnormal font-medium text-xs md:text-sm ">Access ends in 3 days</p>
          </div>

          <button
                  className="bg-cardbg text-textnormal font-medium border border-bordercolor p-2 rounded-lg flex text-sm justify-center items-center gap-2 hover:scale-95 transition-transform"
                >
                 Request Extension
                </button></div>

                </div>
      </div>
      <div className="ml-5 lg:ml-10 mt-4">
        <StatCards />
      </div>
      <div className="ml-5 lg:ml-10 my-4">
        <RecentTable />
      </div>
    </motion.div>
  )
}
