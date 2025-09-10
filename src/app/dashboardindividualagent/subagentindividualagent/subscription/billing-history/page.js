'use client'
import React from 'react'
import Heading from '../../../components/minicomponents/Heading'
import PaymentHistoryTable from './components/PaymentHistoryTable'
import PaymentFilterBar from './components/PaymentFilterBar'
import Navbar from '../../../components/minicomponents/Navbar'
import { ConfigProvider } from 'antd'
import { motion } from 'framer-motion'

export default function BillingHistoryPage() {
  return (
          <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#EEB887', // custom theme color
          borderRadius: 12,
        },
        components: {
          Steps: {
            colorPrimary: '#EEB887',
            colorText: '#000',
            colorTextActive: '#EEB887',
          },
        },
      }}
    >
    <motion.div
      className="mt-0 w-full flex flex-col overflow-x-hidden"
      initial={{ opacity: 0, y: 0 }} // start hidden + slightly down
      animate={{ opacity: 1, y: 0 }} // fade in + move up
      transition={{ duration: 0.6, ease: 'easeInOut' }} // 400ms
    >
         <Navbar />
   <div className='ml-10'>
     <Heading className='mt-6' title="Billing History" subtitle={'View your billing history'}/>
   </div>
      <div className='space-y-6 p-10'>
    <PaymentFilterBar/>
    <PaymentHistoryTable/>
    </div>
    </motion.div>
    </ConfigProvider>
  )
}
