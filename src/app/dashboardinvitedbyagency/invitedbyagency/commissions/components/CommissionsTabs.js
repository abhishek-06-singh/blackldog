'use client'
import React, { useState } from 'react'
import AllComissionsFilter from './AllComissionsFilter'
import AllComissionsTable from './AllComissionsTable'
import ReportsFilter from './ReportsFilter'
import ReportsTable from './ReportsTable'

const CommissionsTabs = ({activeTab, setActiveTab}) => {
 

  return (
    <div>
      {' '}
      <div className="w-full  px-6   rounded-2xl  ">
        {/* Tabs Header */}
        <div className="flex border-b border-bordercolor  mb-8">

          <button
            onClick={() => setActiveTab('my')}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg ${
              activeTab === 'my'
                ? 'text-buttonbg border-b-2 border-buttonbg'
                : 'text-textnormal hover:text-textnormal '
            }`}
          >
            Commissions status
          </button>
          <button
            onClick={() => setActiveTab('sub')}
            className={`ml-4 px-4 py-2 text-sm font-medium rounded-t-lg ${
              activeTab === 'sub'
                ? 'text-buttonbg border-b-2 border-buttonbg'
                : 'text-textnormal hover:text-textnormal '
            }`}
          >
            Reports
          </button>
        </div>

        {/* Tabs Content */}
        <div className=" space-y-4">            
          {activeTab === 'my' && (
            <div>
                <AllComissionsFilter/>
                <AllComissionsTable />
            
            </div>
          )}

          {activeTab === 'sub' && (
            <div>
             <ReportsFilter/>
             <ReportsTable/>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CommissionsTabs
