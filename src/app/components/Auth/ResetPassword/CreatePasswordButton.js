'use client'
import {  MoveLeft } from 'lucide-react'
import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"


export default function CreatePasswordButton({ handleChangePassword }) {
  const [loading, setLoading] = useState(false)



  return (
   <motion.div
            className="px-8 "
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
             <div className="text-textnormal text-xs mb-1">
            Must be at least 8 characters, include a number and a symbol.
          </div>
    <button 
          onClick={handleChangePassword}
        className="w-full flex justify-center mb-4 items-center gap-2 bg-buttonbg text-white py-3 px-4 rounded-lg hover:bg-opacity-90 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 font-medium disabled:opacity-70"
        disabled={loading}
      >
        {loading && (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        )}
        {loading ? 'Updating...' : 'Update Password'}
    
      </button>

      <Link href="/signin"
        className="w-full text-textheading font-medium flex justify-center items-center gap-2  "
        // disabled={loading}
      >
        <MoveLeft /> Back to Sign In
     
      </Link>
    </motion.div>
  )
}
