import React from 'react'
import RecentLeads from './RecentLeads'
import RecentListing from './RecentListing'

export default function RecentTable() {
  return (
    <div className="flex flex-col mt-6 mr-5 lg:mr-10 lg:flex-row gap-4">
    <RecentListing />
     <RecentLeads   />
     
    </div>
  )
}