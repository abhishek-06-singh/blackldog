'use client'
import React from 'react'
import Navbar from '../../components/minicomponents/Navbar'
import Heading from '../../components/minicomponents/Heading'
import { Plus, Upload } from 'lucide-react'
import DocumentData from './components/DocumentData'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function DocumentsPage() {
  const router = useRouter()
const handleClick = () => {
  router.push(`/dashboardagency/agency/documents/add-document`)
}


  return (
    <motion.div
      className="mt-0 w-full flex flex-col overflow-x-hidden"
      initial={{ opacity: 0, y: 0 }} // start hidden + slightly down
      animate={{ opacity: 1, y: 0 }} // fade in + move up
      transition={{ duration: 0.6, ease: 'easeInOut' }} // 400ms
    >
      <Navbar />
              <div className="ml-10 mt-6 h-10 flex pr-10 justify-between">
                <Heading title="Documents" subtitle={'Upload, manage, sign, and track your client documents seamlessly.'}/>
               <div className="flex gap-4">
                  <button
                    className="bg-buttonbg text-background p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform"
                    onClick={handleClick}
                  ><Plus className='w-5 h-5'/>
                    Upload Document
                  </button>
                </div>
              </div>

              <div className="mt-4">
              <DocumentData/>
              </div>
     
    </motion.div>
  )
}
