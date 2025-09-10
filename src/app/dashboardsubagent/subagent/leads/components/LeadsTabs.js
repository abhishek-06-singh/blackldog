'use client'
import React, { useState } from 'react'
import LeadsFilter from '../components/MyLeads/LeadsFilter'
import LeadsTable from '../components/MyLeads/LeadsTable'
import SubAgentsLeadsFilters from '../components/Sub-agentLeads/SubAgentsleadsFilters'
import SubAgentLeadsTable from './Sub-agentLeads/SubAgentLeadsTable'


const LeadsTabs = () => {
  
  return (
            <div className='px-2 md:px-6 space-y-6'>
             <LeadsFilter />

             <LeadsTable />
            </div>
          
  )
}

export default LeadsTabs
