'use client'
// import React from 'react'
import Heading from '../../../components/minicomponents/Heading'
import Navbar from '../../../components/minicomponents/Navbar'
import Oppurtunity_Cards from '../components/Oppurtunity-PipelineComponents/Oppurtunity_Cards'
import StatsCards_Leads from '../components/Oppurtunity-PipelineComponents/StatsCards_Leads'
import SendDocumentsModal from '../components/Modals_leads/SendDocumentModal'
import ReceiptAddOnModal from '../components/Modals_leads/ReceiptAddOnModal'
import { motion } from 'framer-motion'

// import { useState } from 'react'
import { Plus } from 'lucide-react'

export default function OpportunityPipeline() {
  // const [open, setOpen] = useState(true);
  return (
    <motion.div
      className="mt-0 w-full flex flex-col overflow-x-hidden"
      initial={{ opacity: 0, y: 0 }} // start hidden + slightly down
      animate={{ opacity: 1, y: 0 }} // fade in + move up
      transition={{ duration: 0.6, ease: 'easeInOut' }} // 400ms
    >
      <Navbar />
      {/* <SendDocumentsModal open={open} setOpen={setOpen} /> */}
      {/* <ReceiptAddOnModal open={open} setOpen={setOpen} /> */}

      <div className="ml-5 lg:ml-10 mt-4 md:h-10 flex pr-10 justify-between">
        <Heading
          title="Opportunity Pipeline"
          subtitle={'Track and manage your active deals in real time'}
        />

        <div className="flex gap-4">
          <button className="bg-background text-textnormal border border-bordercolor p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform">
            Export CSV
          </button>
          <button className="bg-buttonbg text-background p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform">
            <Plus className="w-4 h-4" /> Add Deal
          </button>
        </div>
      </div>
      <div className="mt-8 md:px-4 lg:px-6">
        <StatsCards_Leads />
      </div>

      <div className="mt-4 md:px-4 lg:px-6">
        <Oppurtunity_Cards />
      </div>
    </motion.div>
  )
}
