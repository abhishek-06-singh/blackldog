'use client'
import React from 'react'
import Navbar from '../../components/minicomponents/Navbar'
import Heading from '../../components/minicomponents/Heading'
import SubscriptionPlanCard from './components/SubscriptionPlanCard'
import BillingSummaryCard from './components/BillingSummaryCard'

import { motion } from 'framer-motion'
export default function SubscriptionPage() {
  return (
    <motion.div
      className="mt-0 w-full flex flex-col overflow-x-hidden"
      initial={{ opacity: 0, y: 0 }} // start hidden + slightly down
      animate={{ opacity: 1, y: 0 }} // fade in + move up
      transition={{ duration: 0.6, ease: 'easeInOut' }} // 400ms
    >
      <Navbar />
      <div className="ml-2 md:ml-6 lg:ml-10">
        <Heading
          className="mt-6"
          title="My Current Plan"
          subtitle={'Manage Your Subscription and billing information'}
        />
      </div>
      <div className="space-y-6 p-2 md:p-6 lg:p-10">
        <SubscriptionPlanCard />
        <BillingSummaryCard />
      </div>
    </motion.div>
  )
}
