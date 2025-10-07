'use client'
import React from "react"
import { Form, Input, Select } from "antd"
import { ChevronDown } from "lucide-react"

const { Option } = Select

export default function DocumentFormFields() {
  return (
    <Form
      layout="vertical"
      className="w-full px-2 md:px-6"
    >
      {/* Document Name */}
      <Form.Item
        label={<span className="w-full text-textnormal text-sm sm:text-base font-medium">Document Name<span className="text-textnormal">*</span></span>}
        name="documentName"
        rules={[{  message: "Please enter document name" }]}
      >
        <Input 
          placeholder="Enter Document Name"
         className="rounded-xl text-xs sm:!text-sm h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none"
        />
      </Form.Item>

      {/* Document Type */}
      <Form.Item
        label={<span className="text-sm text-textnormal sm:text-base font-medium">Document Type<span className="text-textnormal">*</span></span>}
        name="documentType"
        rules={[{  message: "Please select document type" }]}
      >
        <Select
          placeholder={<span className="text-textnormal text-xs sm:text-sm">Select Document Type</span>}
         dropdownClassName=" bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
            className=" w-full h-10 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-xs sm:[&_.ant-select-selection-item]:!text-sm [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
            suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
          size="large"
        >
          <Option value="agreement" className="!text-xs sm:!text-sm !text-textnormal">Agreement</Option>
          <Option value="contract" className="!text-xs sm:!text-sm !text-textnormal">Contract</Option>
          <Option value="invoice" className="!text-xs sm:!text-sm !text-textnormal">Invoice</Option>
        </Select>
      </Form.Item>
    </Form>
  )
}
