import { Info } from "lucide-react"
import React from "react"

export default function CommissionInfoBox() {
  return (
    <div className="border border-bordercolor rounded-lg p-4  bg-cardbg ml-2 mr-2 md:ml-6 md:mr-6 shadow-md">
      <div className="flex items-center gap-2 text-textnormal mb-2">
       <Info className="w-4 h-4 text-textnormal"/>
        <h3 className="font-semibold text-textheading text-sm sm:text-base">
          Commission Management
        </h3>
      </div>
      <p className="text-textnormal text-xs sm:text-sm">
        Your commission structures are defined by your agency. Please contact your agency admin for any changes.
      </p>
    </div>
  )
}
