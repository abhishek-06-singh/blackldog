'use client'
import React, { useState } from 'react'
import DealsFilter from './DealsFilter'
import DealsTable from './DealsTable'
import SubAgentDealsFilter from './SubAgentDealsFilter'
import SubagentDealsTable from './SubagentDealsTable'


const DealsTabs = () => {
  return (
    <div className='px-2 md:px-6 space-y-6'>
      <DealsFilter />
      <DealsTable />
    </div>
  )
}
    

export default DealsTabs
