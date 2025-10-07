'use client'
import React from 'react'
import Heading from '../../components/minicomponents/Heading'
import Navbar from '../../components/minicomponents/Navbar'
import FormPage_Setting from './components/FormPage_Setting'
import { motion } from 'framer-motion'
export default function SettingsPage() {
  return (
    <motion.div
      className="mt-0 w-full flex flex-col overflow-x-hidden"
      initial={{ opacity: 0, y: 0 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: 'easeInOut' }} 
    >
      <Navbar />

      <div className="ml-2 md:ml-6 lg:ml-10 mt-6 md:h-10 flex p-2 md:pr-6 lg:pr-10 flex-col md:flex-row md:justify-between">
        <Heading
          title="Settings"
          subtitle={'Manage your profile, preferences, and security settings.'}
        />

        <button
          onClick={() => setIsOpen(true)}
          className="mt-2 md:mt-0 bg-buttonbg font-medium text-background p-2 md:px-3 md:py-5 rounded-lg flex text-xs sm:text-sm justify-center items-center gap-2 hover:scale-95 transition-transform"
        >
          {' '}
          Save Changes
        </button>
      </div>
      <div className="mt-4">
        <FormPage_Setting />
      </div>
    </motion.div>
  )
}
