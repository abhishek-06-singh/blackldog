'use client'
import React from 'react'
import { useState } from 'react'
import Navbar from '../../components/minicomponents/Navbar'
import Heading from '../../components/minicomponents/Heading'
import { Plus } from 'lucide-react'
import StatsCards_Deals from './components/StatsCard_Deals'
import DealsTabs from './components/DealsTabs'
import { motion } from 'framer-motion'

export default function DealsPage() {
  const [showNewDeals, setShowNewDeals] = useState(false)
  const [open, setOpen] = useState(false)
  const [propertyDeals, setPropertyDeals] = useState(false)
  const [isOpen, setIsOpen] = useState(true)

  return (
    <motion.div
      className="mt-0 w-full flex flex-col overflow-x-hidden"
      initial={{ opacity: 0, y: 0 }} // start hidden + slightly down
      animate={{ opacity: 1, y: 0 }} // fade in + move up
      transition={{ duration: 0.6, ease: 'easeInOut' }} // 400ms
    >
      <Navbar />

      {/* ✅ CASE 1: If property listing is TRUE → Only show overview */}
      {propertyDeals ? (
        <div></div>
      ) : (
        <>
          {/* ✅ CASE 2: If NOT adding new dev, show default content */}
          {!showNewDeals ? (
            <>
              <div className="ml-2 md:ml-6 lg:ml-10 mt-6 h-10 flex pr-2 md:pr-6 lg:pr-10 justify-between">
                <Heading
                  title="Manage Deals"
                  subtitle={'Track and manage all your real estate deals'}
                />
                <button
                  onClick={() => setShowNewDeals(true)}
                  className="font-medium bg-buttonbg text-background p-2 rounded-lg flex text-sm justify-center items-center gap-2 hover:scale-95 transition-transform"
                >
                  <Plus className="text-sm w-4" /> Create New Deals
                </button>
              </div>

              <div className="mt-6 space-y-6 ">
                <StatsCards_Deals />
                <DealsTabs />
              </div>
            </>
          ) : (
            // ✅ CASE 3: New Dev Flow (Add New Property)
            <>
              <div className="ml-2 md:ml-6 lg:ml-10 mt-6 h-10 flex pr-2 md:pr-6 lg:pr-10 justify-between">
                <Heading
                  title="Add New Property"
                  subtitle="Create a new lead"
                />

                <div className="flex gap-4">
                  <button className="bg-background font-medium text-textnormal border-2 p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform">
                    Cancel
                  </button>
                  <button
                    className="bg-textheading font-medium text-background p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform"
                    onClick={() => setOpen(true)}
                  >
                    Save Lead
                  </button>
                </div>
              </div>
              <div className="my-4"></div>
            </>
          )}
        </>
      )}

      {/* Success Modal */}
      {/* <SuccessModal
        isOpen={open}
        onClose={() => setOpen(false)}
        setPropertyListings={setPropertyListings}
      /> */}
    </motion.div>
  )
}
