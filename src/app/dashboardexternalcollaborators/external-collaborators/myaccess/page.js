"use client"
import React from 'react'
import Navbar from '../../components/minicomponents/Navbar'
import { motion } from 'framer-motion'
import Heading from '../../components/minicomponents/Heading'
import AccessInformation from './components/AccessInformation'
import { Clock } from 'lucide-react'
import ActivityLog from './components/ActivityLog'

export default function MyAccessPage() {
  return (
     <motion.div
      className="mt-0 w-full flex flex-col overflow-x-hidden"
      initial={{ opacity: 0, y: 0 }} // start hidden + slightly down
      animate={{ opacity: 1, y: 0 }} // fade in + move up
      transition={{ duration: 0.6, ease: 'easeInOut' }} // 400ms
    >
      {/* Navbar */}
      <Navbar />

        <div className="ml-5 md:ml-10 my-6 h-10 flex pr-5 md:pr-10 justify-between">
        <Heading
          title="Welcome back, John"
          subtitle="Here's what's happening with your business today."
        />
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-1 px-3 rounded-xl bg-shadow '>
            <Clock className='w-4 h-4 text-textnormal'/>
            <p className="text-textnormal font-medium text-xs md:text-sm ">Temporary Access ends in 3 days</p>
          </div>

          <button
                  className="bg-cardbg text-textnormal font-medium border border-bordercolor p-2 rounded-lg flex text-sm justify-center items-center gap-2 hover:scale-95 transition-transform"
                >
                 Request Extension
                </button></div>

      </div>
      <div className="mt-4 p-2 md:px-6 space-y-4">
        <AccessInformation />
        <ActivityLog />
      </div>
     
      </motion.div>
  )
}