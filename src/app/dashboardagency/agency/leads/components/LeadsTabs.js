'use client'
import React, { useState } from 'react'
import LeadsFilter from './AgentLeads/LeadsFilter'
import LeadsTable from './AgentLeads/LeadsTable'
import SubAgentsLeadsFilters from '../components/Sub-agentLeads/SubAgentsleadsFilters'
import SubAgentLeadsTable from './Sub-agentLeads/SubAgentLeadsTable'
import AgencyFilter from './AgencyLeads/AgencyFilter'
import AgencyTable from './AgencyLeads/AgencyTable'


const LeadsTabs = () => {
  const [activeTab, setActiveTab] = useState('my')

  return (
    <div>
      {' '}
      <div className="w-full p-2 md:p-6 rounded-2xl ">
        {/* Tabs Header */}
        <div className="flex border-b border-bordercolor  mb-8">

           <button
            onClick={() => setActiveTab('Agency')}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg ${
              activeTab === 'Agency'
                ? 'text-buttonbg border-b-2 border-buttonbg'
                : 'text-textnormal hover:text-textnormal '
            }`}
          >
            Agency Leads
          </button>

          <button
            onClick={() => setActiveTab('my')}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg ${
              activeTab === 'my'
                ? 'text-buttonbg border-b-2 border-buttonbg'
                : 'text-textnormal hover:text-textnormal '
            }`}
          >
            Agent Leads
          </button>
          <button
            onClick={() => setActiveTab('sub')}
            className={`ml-4 px-4 py-2 text-sm font-medium rounded-t-lg ${
              activeTab === 'sub'
                ? 'text-buttonbg border-b-2 border-buttonbg'
                : 'text-textnormal hover:text-textnormal '
            }`}
          >
            Sub-Agent Leads
          </button>
        </div>

        {/* Tabs Content */}
        <div className="mt-4">
           {activeTab === 'Agency' && (
            <div>
             <AgencyFilter />
             <AgencyTable />
            </div>
          )}
          {activeTab === 'my' && (
            <div>
             <LeadsFilter />

             <LeadsTable />
            </div>
          )}

          {activeTab === 'sub' && (
            <div>
              <SubAgentsLeadsFilters />

              <SubAgentLeadsTable />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LeadsTabs
