"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../../components/minicomponents/Navbar' 
import Heading from '../../components/minicomponents/Heading'
import SharedListingFilter from './components/SharedListingFilter'
import CardComponent_External from './components/CardComponent_External'
import listing from "../../../Data/Real_Estate.json"


export default function SharedListingsPage() {
  return (
       <motion.div
          className="mt-0 w-full flex flex-col overflow-x-hidden"
          initial={{ opacity: 0, y: 0 }} // start hidden + slightly down
          animate={{ opacity: 1, y: 0 }} // fade in + move up
          transition={{ duration: 0.6, ease: 'easeInOut' }} // 400ms
        >
          <Navbar />
          <div className="ml-5 md:ml-10 mt-6  flex pr-5 md:pr-10 ">
            <Heading title="Shared Listings" subtitle={'These properties were shared with you by Sarah Johnson'}/>
          </div>
          <div className='mt-4 p-2 md:px-10 space-y-4'>
            <SharedListingFilter />
            <CardComponent_External listings={listing.slice(0, 2)}/>

          </div>
        </motion.div>
  )
}