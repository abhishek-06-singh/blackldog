'use client'
import React, { useState } from 'react'
import PropertyFilters from './my-listing/PropertyFilters'
import PropertyTable from './my-listing/PropertyTable'
import PropertyFiltersSub from './Sub-Agent/PropertyFiltersSub'
import PropertyTableSub from './Sub-Agent/PropertyTableSub'
const ListingsTabs = () => {
  const [activeTab, setActiveTab] = useState('my')

  return (
    <div>
      {/* Tabs Content */}

      <div className="mt-4 p-2 md:px-6">
        <PropertyFilters />

        <PropertyTable />
      </div>
    </div>
  )
}

export default ListingsTabs
