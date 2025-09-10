'use client'
import React from 'react'
import { useState } from 'react'
import Navbar from '../../components/minicomponents/Navbar'
import Heading from '../../components/minicomponents/Heading'
import { Plus } from 'lucide-react'
import CommissionsTabs from './components/CommissionsTabs'
import FormComissionPage from './components/FormComission/FormComissionPage'
import { Form } from 'antd'
import { useCommission } from '../../../../../context/CommissionContext'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function CommissionsPage() {
  const [showNewCommissions, setShowNewCommissions] = useState(false)
  const [open, setOpen] = useState(false)
  const [Commissions, setCommissions] = useState(false)

  const [form] = Form.useForm()
  const { setCommissionData } = useCommission()
  const router = useRouter()

  const handleSave = async () => {
    try {
      const values = await form.validateFields() // Get form values
      setCommissionData(values) // Save to context
      router.push('/dashboard/agent/commissions/update') // Navigate to update page
    } catch (error) {
      console.log('Validation failed:', error)
    }
  }

  return (
    <motion.div
      className="mt-0 w-full flex flex-col overflow-x-hidden"
      initial={{ opacity: 0, y: 0 }} // start hidden + slightly down
      animate={{ opacity: 1, y: 0 }} // fade in + move up
      transition={{ duration: 0.6, ease: 'easeInOut' }} // 400ms
    >
      <Navbar />

      {/* ✅ CASE 1: If property listing is TRUE → Only show overview */}
      {Commissions ? (
        <div></div>
      ) : (
        <>
          {/* ✅ CASE 2: If NOT adding new dev, show default content */}
          {!showNewCommissions ? (
            <>
              <div className="ml-10 mt-6 h-10 flex pr-10 justify-between">
                <Heading
                  title="Commissions"
                  subtitle={
                    'Your personal contact database to track, segment, and engage your clients'
                  }
                />
                
              </div>

              <div className="mt-4">
                <CommissionsTabs />
              </div>
            </>
          ) : (
            // ✅ CASE 3: New Dev Flow (Add New Commissions)
            <>
              
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
