'use client'
import React from 'react'

import { Plus } from 'lucide-react'
import Heading from '../../components/minicomponents/Heading'
import Navbar from '../../components/minicomponents/Navbar'
import ListingTabs from './ListingTabs'
import StepperForm from '../listings/publish-property/StepperForm'
import { useState } from 'react'
import PropertyOverview from '../listings/publish-property/PropertyOverview'
import StatCards from './components/StatsCards'
import InviteMember from './components/InviteMember'
import { motion } from 'framer-motion'
export default function TeamPage() {
  const [showNewDev, setShowNewDev] = useState(false)
  const [propertyListings, setPropertyListings] = useState(false)
  const [showInviteMember, setShowInviteMember] = useState(false)

  return (
    <motion.div
      className="mt-0 w-full flex flex-col overflow-x-hidden"
      initial={{ opacity: 0, y: 0 }} // start hidden + slightly down
      animate={{ opacity: 1, y: 0 }} // fade in + move up
      transition={{ duration: 0.6, ease: 'easeInOut' }} // 400ms
    >
      <Navbar />

      {/* ✅ CASE: Show Invite Member directly */}
      {showInviteMember ? (
        <div className="">
          <InviteMember />
        </div>
      ) : propertyListings ? (
        <PropertyOverview />
      ) : (
        <>
          {/* ✅ Default team page content */}
          {!showNewDev ? (
            <>
              <div className="ml-5 md:ml-10 mt-4 md:h-10 flex flex-col md:flex-row pr-5 md:pr-10 md:justify-between">
                <Heading
                  title="Team Members"
                  subtitle="Manage your sub-agents, External collaborators track their activity"
                />
                <button
                  onClick={() => setShowInviteMember(true)}
                  className="bg-buttonbg mt-4 md:mt-0 text-background p-2 rounded-lg flex text-sm justify-center items-center gap-2 hover:scale-95 transition-transform"
                >
                  <Plus className="text-sm w-4 " /> Add New Member
                </button>
              </div>

              <div className=" mt-4 ml-4 md:mt-10 md:ml-10">
                <StatCards />
              </div>

              <div className="mt-4">
                <ListingTabs />
              </div>
            </>
          ) : (
            // ✅ Add New Property flow
            <>
              <div className="ml-10 mt-4 h-10 flex pr-10 justify-between">
                <Heading title="Add New Property" />

                <div className="flex gap-4">
                  <button className="bg-background text-textnormal border-2 p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform">
                    Save as Draft
                  </button>
                  <button className="bg-textheading text-background p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform">
                    Publish Property
                  </button>
                </div>
              </div>

              <div className="mt-4">
                <StepperForm />
              </div>
            </>
          )}
        </>
      )}
    </motion.div>
  )
}
