'use client'
import React from 'react'
import ParentInformation from './components/ParentInformation'
import AboutCard from './components/AboutCard'
import Navbar from '../../components/minicomponents/Navbar'
import Heading from '../../components/minicomponents/Heading'
import SharedListings from './components/SharedListings'
import { motion } from 'framer-motion'

export default function ParentAgent() {
  return (
     <motion.div
      className="mt-0 w-full flex flex-col overflow-x-hidden"
      initial={{ opacity: 0, y: 0 }} // start hidden + slightly down
      animate={{ opacity: 1, y: 0 }} // fade in + move up
      transition={{ duration: 0.6, ease: 'easeInOut' }} // 400ms
    >
          <Navbar />
          <div className="ml-10 mt-6 h-10 flex pr-10 justify-between">
                <Heading title="Parent Agent" subtitle={'View details and stay connected with the agent who invited you.'}/>
               
              </div>
    <div className="p-2 md:p-10 space-y-4">
      <ParentInformation />
      <AboutCard />
      <SharedListings/>
    </div>
    </motion.div>
  )
}