'use client'
import React from 'react'
import OverviewLineChart from './OverviewLineChart'
import OverviewBarChart from './OverviewBarChart'

const leadsData = [
  { time: 10, value: 80 },
  { time: 20, value: 60 },
  { time: 30, value: 95 },
  { time: 40, value: 120 },
  { time: 50, value: 100 },
  { time: 60, value: 155 },
]

const performanceData = [
  { name: 'Property 1', value: 400 },
  { name: 'Property 2', value: 310 },
  { name: 'Property 3', value: 200 },
  { name: 'Property 4', value: 290 },
]

export default function OverviewDashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Leads & Conversions Over Time */}
      <div className="bg-cardbg p-2 md:p-4 rounded-2xl shadow-md border border-bordercolor">
        <h3 className="text-sm font-medium text-textheading mb-4">
          Leads & Conversions Over Time
        </h3>
        <div className="w-full h-[300px]">
          <OverviewLineChart leadsData={leadsData} />

        </div>
      </div>

      {/* Listing Performance */}
      <div className="bg-cardbg p-2 md:p-4 rounded-2xl shadow-md border border-bordercolor">
        <h3 className="text-sm font-medium text-textheading mb-4">
          Listing Performance
        </h3>
        <div className="w-full h-auto md:h-[300px]">
          <OverviewBarChart performanceData={performanceData} />

        </div>
      </div>
    </div>
  )
}
