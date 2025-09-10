'use client'
import React, { useState } from 'react'
import Navbar from '../../components/minicomponents/Navbar'
import Heading from '../../components/minicomponents/Heading'
import { Plus } from 'lucide-react'
import LeadsTabs from '../leads/components/LeadsTabs'
import FormDetails from './components/Form/FormDetails'
import StatsCardLeads from './components/StatsCard_leads'
import { motion } from 'framer-motion'
// import SuccessModal from './components/SuccessModal' // uncomment when needed

export default function LeadsPage() {
  const [showNewLeads, setShowNewLeads] = useState(false)
  const [open, setOpen] = useState(false)
  const [propertyLeads, setPropertyLeads] = useState(false)

  return (
     <motion.div
      className="mt-0 w-full flex flex-col overflow-x-hidden"
      initial={{ opacity: 0, y: 0 }} // start hidden + slightly down
      animate={{ opacity: 1, y: 0 }} // fade in + move up
      transition={{ duration: 0.6, ease: 'easeInOut' }} // 400ms
    >
      <Navbar />

      {/* ✅ CASE 1: Show overview if propertyLeads is true */}
      {propertyLeads ? (
        <div></div>
      ) : (
        <>
          {/* ✅ CASE 2: Show Leads tab */}
          {!showNewLeads ? (
            <>
              <div className="px-4 md:px-10 mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <Heading title="Leads" />
                <button
                  onClick={() => setShowNewLeads(true)}
                  className="w-full md:w-auto bg-buttonbg text-background p-2 rounded-lg flex text-sm justify-center items-center gap-2 hover:scale-95 transition-transform"
                >
                  <Plus className="w-4 h-4" /> Add New Leads
                </button>
              </div>

              <div className="mt-4 space-y-6 ">
                <StatsCardLeads />
                <LeadsTabs />
              </div>
            </>
          ) : (
            // ✅ CASE 3: Show Add New Property Form
            <>
              <div className="px-4 md:px-10 mt-6 flex flex-col md:flex-row justify-between gap-4">
                <Heading title="Add New Property" subtitle="Create a new lead" />

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setShowNewLeads(false)}
                    className="bg-background text-textnormal border border-bordercolor p-2 rounded-lg text-xs hover:scale-95 transition-transform w-full sm:w-auto"
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-buttonbg text-background p-2 rounded-lg text-xs hover:scale-95 transition-transform w-full sm:w-auto"
                    onClick={() => setOpen(true)}
                  >
                    Save Lead
                  </button>
                </div>
              </div>

              <div className="my-4  px-4 md:px-10">
                
                <FormDetails />
              </div>
            </>
          )}
        </>
      )}

      {/* Success Modal */}
      {/* 
      <SuccessModal
        isOpen={open}
        onClose={() => setOpen(false)}
        setPropertyListings={setPropertyLeads}
      />
      */}
    </motion.div>
  )
}
