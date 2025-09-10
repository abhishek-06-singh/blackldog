"use client"

import React, { useState } from "react"
import { Select, Button, DatePicker } from "antd"
import { ChevronDown, Download } from "lucide-react"

const { Option } = Select
const { RangePicker } = DatePicker

const ReportsFilter = () => {
  const [property, setProperty] = useState("all")
  const [postedBy, setPostedBy] = useState("all")
  const [subagents, setSubagents] = useState("all")
  const [dateRange, setDateRange] = useState(null)

  return (
    <div className="w-full bg-cardbg rounded-2xl shadow-md border border-bordercolor py-6 px-8 ">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-end">
        
        {/* Property */}
        <div className="flex flex-col">
          <label className="text-sm text-textheading mb-1">Property</label>
          <Select
            value={property}
            onChange={setProperty}
            dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
            className="w-full h-10 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal"
            suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
          >
            <Option value="all" className="!text-textnormal">All Properties</Option>
            <Option value="villa" className="!text-textnormal">Villas</Option>
            <Option value="apartment" className="!text-textnormal">Apartments</Option>
          </Select>
        </div>

        {/* Date Range */}
        <div className="flex flex-col">
          <label className="text-sm text-textheading mb-1">Date Range</label>
          <RangePicker
            value={dateRange}
            onChange={setDateRange}
            className="w-full h-10 rounded-xl !bg-cardbg !border-bordercolor"
          />
        </div>

        {/* Export Button */}
        <div className=" coll-span-full flex sm:justify-start lg:justify-end mt-2 lg:mt-6">
          <Button
            icon={<Download className="w-4 h-4" />}
            className="rounded-xl h-10 px-4 bg-buttonbg border border-bordercolor text-background hover:bg-boxbg"
          >
            Export CSV
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ReportsFilter
