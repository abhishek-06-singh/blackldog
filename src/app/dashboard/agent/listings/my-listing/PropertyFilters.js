'use client'

import React, { useState } from 'react'
import { Input, Select, Button } from 'antd'
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons'
import { ChevronDown } from 'lucide-react'

const { Option } = Select

const PropertyFilters = () => {
  const [status, setStatus] = useState('all')
  const [type, setType] = useState('all')
  const [price, setPrice] = useState('all')
  const [sort, setSort] = useState('newest')

  return (
    <div className="w-full bg-cardbg rounded-2xl shadow-md border border-bordercolor p-6">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 whitespace-nowrap gap-4">
        {/* Search */}
        <div className="lg:col-span-6 w-full flex flex-col justify-end mt-4 sm:mt-0">
          <Input
            prefix={<SearchOutlined />}
            placeholder="Search by Property name"
            className=" rounded-xl placeholder:!text-textplaceholder h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none"
          />
        </div>

        {/* All Statuses */}
        <div className="lg:col-span-2 w-full flex flex-col mt-4 sm:mt-0">
          <label className="text-sm text-textheading mb-1">All Statuses</label>
          <Select
            value={status}
            onChange={setStatus}
            dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
            className="w-full h-10 [&_.ant-select-selection-item]:!text-xs md:[&_.ant-select-selection-item]:!text-sm [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
            suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
          >
            <Option value="all" className="!text-xs md:!text-sm !text-textnormal">All Statuses</Option>
            <Option value="active" className="!text-xs md:!text-sm !text-textnormal">Active</Option>
            <Option value="sold" className="!text-xs md:!text-sm !text-textnormal">Sold</Option>
          </Select>
        </div>

        {/* Property Type */}
        <div className="lg:col-span-2 w-full flex flex-col mt-4 sm:mt-0">
          <label className="text-sm text-textheading mb-1">Property Type</label>
          <Select
            value={type}
            onChange={setType}
            dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
            className="w-full h-10 [&_.ant-select-selection-item]:!text-xs md:[&_.ant-select-selection-item]:!text-sm [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
             suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
          >
            <Option value="all" className="!text-xs md:!text-sm !text-textnormal">All</Option>
            <Option value="house" className="!text-xs md:!text-sm !text-textnormal">House</Option>
            <Option value="apartment" className="!text-xs md:!text-sm !text-textnormal">Apartment</Option>
          </Select>
        </div>

        {/* Price Range */}
        <div className="lg:col-span-2 w-full flex flex-col mt-4 sm:mt-0">
          <label className="text-sm text-textheading mb-1">Price Range</label>
          <Select
            value={price}
            onChange={setPrice}
            dropdownClassName="w-full bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
            className="w-full h-10 [&_.ant-select-selection-item]:!text-xs md:[&_.ant-select-selection-item]:!text-sm [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
             suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
          >
            <Option value="all" className="!text-xs md:!text-sm !text-textnormal">All</Option>
            <Option value="0-100k" className="!text-xs md:!text-sm !text-textnormal">0 - 100k</Option>
            <Option value="100k-500k" className="!text-xs md:!text-sm !text-textnormal">100k - 500k</Option>
          </Select>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="w-full mt-6 sm:mt-10">
      <div className="flex flex-col justify-center md:flex-row md:justify-end items-center gap-4 ">
        {/* Export CSV */}
        <Button
          icon={<DownloadOutlined />}
          className="w-full md:w-fit !bg-cardbg !border !border-bordercolor !text-textheading hover:!text-background hover:!bg-buttonbg rounded-xl flex items-center px-4 py-2 h-10"
        >
          Export CSV
        </Button>

        {/* Sort By Dropdown */}
        <div className="w-full md:w-40  flex flex-col mt-4 sm:mt-0">
          <Select
            value={sort}
            onChange={setSort}
            dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
            className="w-full h-10 [&_.ant-select-selection-item]:!text-xs md:[&_.ant-select-selection-item]:!text-sm [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
             suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
          >
            <Option value="newest" className="!text-xs md:!text-sm !text-textnormal">Newest</Option>
            <Option value="oldest" className="!text-xs md:!text-sm !text-textnormal">Oldest</Option>
          </Select>
        </div>
      </div>
      </div>
    </div>
  )
}

export default PropertyFilters
