'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

export default function SuccessModal({ isOpen, onClose, setPropertyListings }) {
  if (!isOpen) return null

  const handleViewListing = () => {
    setPropertyListings(true) // ✅ show property listing
    onClose() // ✅ close modal at the same time
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black-900 bg-opacity-30 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-background rounded-2xl shadow-lg max-w-lg w-full p-10 relative h-96"
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        {/* Success Icon */}
        <div className="flex justify-center mb-4 mt-5">
          <div className="flex items-center justify-center w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-green-700">
            <span className="text-green-200 "><Check className="text-white font-extrabold w-12 h-12 md:w-20 md:h-20" />
</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="font-montserrat font-semibold text-sm sm:text-base md:text-lg md:text-[24px] leading-[150%] tracking-[0] text-center text-textheading mb-2">
          Property added! A new chat has been created for this listing.
        </h2>

        {/* Subtitle */}
        <p className="text-xs md:text-sm text-textnormal text-center mb-6">
          You can now view and manage conversations related to this property
          directly from the Messages tab.
        </p>

        {/* Buttons */}
        <div className="flex w-full justify-center gap-2 md:gap-3">
          <button
            className="bg-buttonbg whitespace-nowrap text-background w-full px-4 md:px-6 py-2 h-10 rounded-lg text-xs md:text-sm font-medium hover:scale-95 transition-transform"
            onClick={() => alert('Go to Chat clicked')}
          >
            Go to Chat
          </button>
          <button
            className="border bg-background border-bordercolor w-full h-10 text-textnormal px-4 md:px-6 py-2 rounded-lg text-xs whitespace-nowrap md:text-sm font-medium hover:scale-95 transition-transform"
            onClick={handleViewListing}
          >
            View Listing
          </button>
        </div>
      </motion.div>
    </div>
  )
}
