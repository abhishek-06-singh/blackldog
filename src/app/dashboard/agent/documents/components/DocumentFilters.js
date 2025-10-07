'use client'

import React, { useState } from 'react'
import { Input, Select, DatePicker } from 'antd'
import { SearchOutlined, CalendarOutlined } from '@ant-design/icons'
import { ChevronDown } from 'lucide-react'

const { Option } = Select
const { RangePicker } = DatePicker

const DocumentFilters = () => {
  const [status, setStatus] = useState('all')
  const [type, setType] = useState('all')
  const [price, setPrice] = useState('all')

  return (
    <div className="w-full bg-cardbg rounded-2xl shadow-md border border-bordercolor p-6">
      
      {/* Search Bar - Always Full Width */}
      <div className="mb-4">
        <Input
          prefix={<SearchOutlined />}
          placeholder="Search by name, email or listing"
          className="rounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none"
        />
      </div>

      {/* Filters Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        
        {/* Status */}
        <div className="flex flex-col">
          <label className="text-sm text-textheading mb-1">All Statuses</label>
          <Select
            value={status}
            onChange={setStatus}
            dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
            className="w-full h-10 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
            suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
          >
            <Option value="all">All</Option>
            <Option value="new">New</Option>
            <Option value="negotiation">Negotiation</Option>
            <Option value="closed">Closed</Option>
          </Select>
        </div>

        {/* Document Type */}
        <div className="flex flex-col">
          <label className="text-sm text-textheading mb-1">Document Type</label>
          <Select
            value={type}
            onChange={setType}
            dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
            className="w-full h-10 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
            suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
          >
            <Option value="all">All</Option>
            <Option value="contract">Contract</Option>
            <Option value="offer">Offer</Option>
            <Option value="agreement">Agreement</Option>
            <Option value="other">Other</Option>
          </Select>
        </div>

        {/* Linked Properties */}
        <div className="flex flex-col">
          <label className="text-sm text-textheading mb-1">Linked Properties</label>
          <Select
            value={price}
            onChange={setPrice}
            dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
            className="w-full h-10 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
            suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
          >
            <Option value="all">All</Option>
            <Option value="property1">Property 1</Option>
            <Option value="property2">Property 2</Option>
            <Option value="property3">Property 3</Option>
          </Select>
        </div>

        {/* Date Range */}
        <div className="flex flex-col">
          <label className="text-sm text-textheading mb-1">Date Range</label>
          <RangePicker
            className="
              w-full h-10 rounded-xl
              [&_.ant-picker-input>input]:!text-textnormal
              [&_.ant-picker-input>input::placeholder]:!text-placeholder
              [&_.ant-picker-separator]:!text-textnormal
              !bg-cardbg !border-bordercolor !focus:border-textnormal !ring-0
            "
            suffixIcon={<CalendarOutlined className="w-4 h-4 text-placeholder" />}
          />
        </div>
      </div>
    </div>
  )
}

export default DocumentFilters
