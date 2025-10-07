'use client'
import React, { useState } from 'react'
import MyReportsFilters from './Myself/MyReportsFilters'
import SubAgentsFilters from './SubAgents/SubAgentsFilters'
import StatsCard_Reports from './Myself/StatcsCardReports'
import DashboardCharts from './Myself/DashboardCharts'
import SalesFunnel from './Myself/SalesFunnel'
import ListingDetailsTable from './Myself/ListingDetailsTable'
import SubAgentLeaderBoard from './SubAgents/SubAgentLeadershipBoard'
import SubAgentsDashboardCharts from './SubAgents/SubAgentsDashboardCharts'
import SubAgentPerformanceOverview from './SubAgents/SubAgentPerformanceOverview'


const ReportsTabs = () => {
  const [activeTab, setActiveTab] = useState('my')

  return (
      <div className="w-full  rounded-2xl p-2 pb-4 md:p-8">
        <div className="mt-4">
            <div className='space-y-6'>
             <MyReportsFilters />
             <StatsCard_Reports />
             <DashboardCharts />
             <SalesFunnel />
             <ListingDetailsTable/>
            </div>
        </div>
      </div>
  )
}

export default ReportsTabs
