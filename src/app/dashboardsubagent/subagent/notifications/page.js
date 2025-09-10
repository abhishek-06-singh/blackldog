'use client'

import { motion } from 'framer-motion'
import Heading from '../../components/minicomponents/Heading'
import Navbar from '../../components/minicomponents/Navbar'
import NotificationsTabs from './components/NotificationsTabs'

export default function NotificationsPage() {
  return (
    <motion.div
      className="mt-0 w-full flex flex-col overflow-x-hidden"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <Navbar />

      <div className="ml-10 mt-6 h-10 flex pr-10 justify-between">
        <Heading
          title="Notifications"
          subtitle="Stay updated on new leads, contract changes, and messages"
        />
      </div>

      <div className="mt-4">
        <NotificationsTabs />
      </div>
    </motion.div>
  )
}
