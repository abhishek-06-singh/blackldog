'use client'
import React from 'react'

const CommissionDetails = () => {
  return (
    <div className="bg-cardbg border border-bordercolor rounded-xl shadow-sm p-4 w-full max-w-full">
      <h3 className="text-sm font-semibold text-textheading mb-4">
        Your Commission Details
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Commission Type */}
        <div>
          <p className="text-xs text-textnormal mb-1">Commission Type</p>
          <p className="text-sm font-medium text-textheading">Percentage</p>
        </div>

        {/* Commission Share */}
        <div>
          <p className="text-xs text-textnormal mb-1">Your Commission Share</p>
          <p className="text-sm font-medium text-textheading">$6,250 (25%)</p>
        </div>

        {/* Status */}
        <div>
          <p className="text-xs text-textnormal mb-1">Status</p>
          <span className="inline-block border border-status-pending-in-review-500 text-status-pending-in-review-500 text-xs font-semibold px-3 py-1 rounded-full">
            Pending
          </span>
        </div>
      </div>
    </div>
  )
}

export default CommissionDetails
