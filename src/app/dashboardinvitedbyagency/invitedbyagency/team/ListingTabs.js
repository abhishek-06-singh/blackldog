'use client'
import React, { useState } from 'react'
import SubagentFilters from './Sub-Agents/SubagentFilters'
import SubagentTable from './Sub-Agents/SubagentTable'

const ListingsTabs = () => {
  return (
    <div className="mt-4">
      <div>
        <SubagentFilters />
        <SubagentTable />
     
      </div>
    </div>
  )
}

export default ListingsTabs
