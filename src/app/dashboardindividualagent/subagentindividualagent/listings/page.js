'use client'
import React from 'react'

import { Plus } from 'lucide-react'
import Heading from '../../components/minicomponents/Heading'
import Navbar from '../../components/minicomponents/Navbar'
import ListingTabs from './ListingsTabs'
import StepperForm from './publish-property/StepperForm'
import { useState } from 'react'
import SuccessModal from './publish-property/SuccessModal'
import PropertyOverview from './publish-property/PropertyOverview' // 👈 import your overview component
// import BuyerLeadModal from './publish-property/BuyerLeadModal'
// import SaleValueModal from './publish-property/SaleValueModal'
import CommissionDistributionModal from './publish-property/CommissionDistributionModal'
import { motion } from 'framer-motion'
export default function ListingsPage() {
  const [showNewDev, setShowNewDev] = useState(false)
  const [open, setOpen] = useState(false)
  const [propertyListings, setPropertyListings] = useState(false)
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
      {propertyListings ? (
        <PropertyOverview />
      ) : (
        <>
          {/* ✅ CASE 2: If NOT adding new dev, show default content */}
          {!showNewDev ? (
            <>
              <div className="w-full ml-5 md:ml-10 mt-6 md:h-10 flex flex-col md:flex-row pr-10 justify-between">
                <Heading title="Listings" />
                <button
                  onClick={() => setShowNewDev(true)}
                  className="w-full md:w-fit mt-4 mr-4 md:mr-8 md:mt-0 bg-buttonbg text-background p-2 rounded-lg flex text-sm justify-center items-center gap-2 hover:scale-95 transition-transform"
                >
                  <Plus className="text-sm w-4" /> Add New Listing
                </button>
              </div>

              <div className="mt-4">
                <ListingTabs />
              </div>
            </>
          ) : (
            // ✅ CASE 3: New Dev Flow (Add New Property)
            <>
              <div className="ml-5 md:ml-10 mt-4 md:h-10 flex pr-5 md:pr-10 flex-col justify-center md:flex-row md:justify-between">
                <Heading title="Add New Property" />

                <div className="flex mt-5 md:mt-0 flex-col md:flex-row gap-4">
                  <button className="bg-background text-textnormal border border-bordercolor p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform">
                    Save as Draft
                  </button>
                  <button
                    className="bg-buttonbg font-medium text-background p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform"
                    onClick={() => setOpen(true)}
                  >
                    Publish Property
                  </button>
                </div>
              </div>
              <div className="my-4">
                <StepperForm />
              </div>
            </>
          )}
        </>
      )}

      {/* Success Modal */}
      <SuccessModal
        isOpen={open}
        onClose={() => setOpen(false)}
        setPropertyListings={setPropertyListings}
      />
      {/* <BuyerLeadModal isOpen={isOpen} /> */}
      {/* <SaleValueModal isOpen={isOpen} /> */}
      {/* <CommissionDistributionModal isOpen={isOpen} /> */}
    </motion.div>
  )
}
