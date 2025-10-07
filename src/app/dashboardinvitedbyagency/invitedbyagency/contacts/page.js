'use client'
import React from 'react'
import { useState } from 'react'
import Navbar from '../../components/minicomponents/Navbar'
import Heading from '../../components/minicomponents/Heading'
import { Plus, Upload } from 'lucide-react'
import ContactsData from './components/ContactData'
import ContactDetails from './components/ContactDetails'
import { motion } from 'framer-motion'

export default function LeadsPage() {
  const [showNewContacts, setShowNewContacts] = useState(false)
  const [open, setOpen] = useState(false)
  const [propertyContacts, setPropertyContacts] = useState(false)
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
      {propertyContacts ? (
        <div></div>
      ) : (
        <>
          {/* ✅ CASE 2: If NOT adding new contact, show default content */}
          {!showNewContacts ? (
            <>
              <div className="w-full ml-4 md:ml-10 mt-6 md:h-10 flex pr-6 md:pr-10 flex-col md:flex-row md:justify-between">
                <div className="md:w-1/2">
                  <Heading
                    title="Contacts"
                    subtitle={
                      'Your personal contact database to track, segment, and engage your clients'
                    }
                  />
                </div>
                <div className="flex flex-col pt-6 mr-4 md:pt-0 md:mr-10 md:flex-row gap-2 lg:gap-4 md:w-auto">
                  <button className="bg-background text-textnormal text-xs md:text-sm border border-bordercolor p-2 rounded-lg flex justify-center items-center gap-1 whitespace-nowrap lg:gap-2 hover:scale-95 transition-transform">
                    <Upload className="w-4" /> Export CSV
                  </button>
                  <button
                    className="bg-buttonbg text-background whitespace-nowrap p-3 md:p-2 rounded-lg flex text-xs md:text-sm justify-center items-center gap-2 hover:scale-95 transition-transform"
                    onClick={() => setShowNewContacts(true)}
                  >
                    Add Contact
                  </button>
                </div>
              </div>

              <div className="md:mt-4">
                <ContactsData />
              </div>
            </>
          ) : (
            // ✅ CASE 3: New Dev Flow (Add New Property)
            <>
              <div className="ml-5 md:ml-10 mt-6 md:h-10 flex pr-5 md:pr-10 flex-col md:flex-row md:justify-between">
                <Heading
                  title="Add New Contact"
                  subtitle="Add a new professional contact to your CRM."
                />

                <div className="flex flex-col md:flex-row gap-4">
                  <button className="bg-background text-textnormal border border-bordercolor p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform">
                    Cancel
                  </button>
                  <button
                    className="bg-buttonbg text-background p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform"
                    onClick={() => setOpen(true)}
                  >
                    Save Contact
                  </button>
                </div>
              </div>
              <div className="my-4 ]">
                <ContactDetails />
              </div>
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
