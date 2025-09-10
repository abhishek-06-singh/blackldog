'use client'
import React, { useState } from 'react'
import MyReportsFilters from './Myself/MyReportsFilters'
import StatsCard_Reports from './Myself/StatcsCardReports'
import DashboardCharts from './Myself/DashboardCharts'
import SalesFunnel from './Myself/SalesFunnel'
import ListingDetailsTable from './Myself/ListingDetailsTable'


const ReportsTabs = () => {

  return (
    <div>

        {/* Tabs Content */}
        <div className="mt-4">
         
            <div className='p-2 md:p-6 space-y-6'>
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
